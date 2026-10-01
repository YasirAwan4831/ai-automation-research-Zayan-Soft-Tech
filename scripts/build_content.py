"""Turns the raw extraction (content/research.json) into content/document.json: sections -> blocks.
Usage: python3 scripts/build_content.py"""
import json, re
raw = json.load(open("content/research.json"))
CALLOUT_TITLES = ["What AI Automation Can Do for Your Business", "A Common Situation", "AI-Powered Automation", "Traditional Automation",
    "Practical Example", "Privacy, Consent, and Platform Rules", "A Home-Based Bakery", "Example: A Small Service Business",
    "A Realistic View", "A Business Owner's Day, Before and After", "Understand the Process Before Choosing the Technology",
    "Human Checkpoints", "Note on Healthcare Examples"]
def slug(s): return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
def drop_empty_cols(rows):
    keep = [j for j in range(max(map(len, rows))) if any(len(r) > j and r[j] for r in rows)]
    return [[r[j] if len(r) > j else "" for j in keep] for r in rows]
def merge_first_two(rows):
    return [[(r[0] + " " + r[1]).strip()] + r[2:] for r in rows]
def callout_from(text):
    text = text.strip()
    for t in CALLOUT_TITLES:
        if text.startswith(t):
            body = text[len(t):].strip()
            items = [x.strip() for x in re.split(r"\s*•\s*", body) if x.strip()]
            if body.startswith("•") or (len(items) > 1 and "•" in body):
                lead = [] if body.startswith("•") else [items.pop(0)]
                return dict(type="callout", title=t, text=" ".join(lead), items=items)
            return dict(type="callout", title=t, text=body, items=[])
    return None
blocks, pending_flow = [], False
for b in raw:
    t = b["type"]
    if t == "table":
        rows = drop_empty_cols(b["rows"])
        if len(rows) == 1 and len(rows[0]) <= 2 and (c := callout_from(rows[0][-1])):
            blocks.append(c); continue
        if len(rows) == 1: continue  # fragments of the department flow diagram (rebuilt as a workflow component)
        h = rows[0]
        if h[0] == "Focus" and h[1] == "Area": rows = merge_first_two(rows)
        if h[0] == "Step" and len(h) == 4 and h[1] == "": rows = merge_first_two(rows)
        if h[0] == "Consideration" and len(h) == 4: rows = merge_first_two(rows)
        rows = [r for r in rows if any(r)]
        kind = "keyvalue" if rows[0][0] in ("The Problem", "Business Problem") else "table"
        if rows[0][0] == "Step 1": kind = "steps"
        if rows[0][0] == "1" and len(rows[0]) == 2: kind = "numbered"
        if blocks and blocks[-1]["type"] == "table" and blocks[-1]["rows"][0] == rows[0]:
            blocks[-1]["rows"].extend(rows[1:]); continue
        if kind == "table" and len(rows[0]) == 3 and rows[0][0] == "Step" and rows[0] == ["Step", "What Happens", "Example"] and blocks and blocks[-1]["type"] == "table" and blocks[-1]["rows"][0] == rows[0]:
            continue
        blocks.append(dict(type=kind, rows=rows, page=b["page"]))
    elif t == "flowbox": continue
    elif t == "callout":
        m = re.match(r"^(\d)\. (.+?)\s{0}$", b["title"])
        blocks.append(dict(type="flowstep", title=b["title"], lines=b["lines"], page=b["page"]))
    else: blocks.append(b)
# Group flow steps into one workflow marker (section 19)
out, i = [], 0
while i < len(blocks):
    if blocks[i]["type"] == "flowstep":
        j = i
        while j < len(blocks) and blocks[j]["type"] == "flowstep": j += 1
        out.append(dict(type="workflow", id="general")); i = j
    else: out.append(blocks[i]); i += 1
blocks = out
# Insert hand-linked workflow markers after their intro paragraphs
res = []
for b in blocks:
    res.append(b)
    if b["type"] == "p" and b["text"].startswith("The greatest value for a company"): res.append(dict(type="workflow", id="department"))
    if b["type"] == "p" and b["text"].startswith("The following workflow shows the complete journey of a lead"): res.append(dict(type="workflow", id="lead"))
# Sections
sections, cur, sub = [], None, None
for b in res:
    if b["type"] == "h1":
        m = re.match(r"^(\d+)\.\s+(.*)$", b["text"])
        cur = dict(id=slug(b["text"]), number=m.group(1) if m else "", title=m.group(2) if m else b["text"], page=b["page"], blocks=[])
        sections.append(cur)
    elif cur is not None:
        if b["type"] == "h2":
            m = re.match(r"^(\d+\.\d+)\s+(.*)$", b["text"])
            b = dict(type="h2", id=slug(b["text"]), number=m.group(1), text=m.group(2), page=b["page"])
        cur["blocks"].append(b)
json.dump(sections, open("content/document.json", "w"), ensure_ascii=False, indent=1)
print(len(sections), "sections")
for s in sections: print(s["number"], s["title"][:50], len(s["blocks"]))
# Loss check: every word of the PDF body text must appear in the output
import subprocess, collections
pdf_words = collections.Counter(re.findall(r"[A-Za-z0-9]+", subprocess.run(["pdftotext", "-f", "3", "/mnt/user-data/uploads/Why_Does_a_Business_Need_AI_Automation_Muhammad_Yasir.pdf", "-"], capture_output=True, text=True).stdout))
mine = collections.Counter(re.findall(r"[A-Za-z0-9]+", json.dumps(sections)))
missing = {w: n - mine[w] for w, n in pdf_words.items() if n - mine[w] > 2 and w.lower() not in ("zayan", "soft", "tech", "internship", "page", "yasir", "muhammad")}
print("coverage words pdf:", sum(pdf_words.values()), "mine:", sum(mine.values()), "missing:", dict(list(missing.items())[:25]))
