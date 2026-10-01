import document from "@/content/document.json";

export const sections = document;
export const getSection = (slug) => sections.find((s) => s.id === slug);
export const sectionLabel = (s) => (s.number ? `${s.number}. ${s.title}` : s.title);
export function neighbours(slug) {
  const i = sections.findIndex((s) => s.id === slug);
  return { prev: sections[i - 1] || null, next: sections[i + 1] || null };
}
export const headings = (section) => section.blocks.filter((b) => b.type === "h2");

/** Section 18: eight practical business examples (heading + key/value table). */
export function useCases() {
  const s = sections.find((x) => x.number === "18");
  const out = [];
  s.blocks.forEach((b, i) => {
    if (b.type === "h2" && s.blocks[i + 1]?.type === "keyvalue") {
      out.push({ id: b.id, number: b.number, title: b.text.replace(/^Example \d+:\s*/, ""), rows: s.blocks[i + 1].rows });
    }
  });
  return out;
}
/** Section 22: nine-step implementation framework. */
export function implementationSteps() {
  const s = sections.find((x) => x.number === "22");
  return s.blocks.find((b) => b.type === "steps").rows;
}
/** Section 2.1 table: AI, Automation, AI Automation. */
export function concepts() {
  const s = sections.find((x) => x.number === "2");
  return s.blocks.find((b) => b.type === "table").rows.slice(1);
}
export function searchIndex() {
  const entries = [];
  const text = (b) => (b.rows ? b.rows.flat().join(" ") : [b.title, b.text, ...(b.items || [])].filter(Boolean).join(" "));
  sections.forEach((s) => {
    let current = { anchor: "", heading: s.title, parts: [] };
    const push = () => current.parts.length && entries.push({ slug: s.id, anchor: current.anchor, sectionTitle: sectionLabel(s), heading: current.heading, text: current.parts.join(" ") });
    s.blocks.forEach((b) => {
      if (b.type === "h2") { push(); current = { anchor: b.id, heading: `${b.number} ${b.text}`, parts: [] }; }
      else current.parts.push(text(b));
    });
    push();
  });
  return entries;
}
