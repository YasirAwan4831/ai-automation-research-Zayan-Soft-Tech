import Link from "next/link";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { useCases } from "@/lib/content";

export const metadata = { title: "Business use cases", description: "Eight practical business examples: problem, manual process, automation solution, workflow, expected benefit and human involvement." };

export default function UseCases() {
  const cases = useCases();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Use cases" }]} />
      <h1 className="font-serif text-4xl font-bold text-navy-800 dark:text-white">Business use cases</h1>
      <p className="mt-3 max-w-[65ch] font-serif text-lg leading-8">The eight real-world scenarios from section 18. Each shows the business problem, the manual process, the automation solution, the workflow, the expected benefit and what people continue to do.</p>
      <div className="mt-8 space-y-4">
        {cases.map((c, i) => {
          const flow = c.rows.find(([k]) => k === "Workflow")?.[1].replace(/\.$/, "").split("→").map((s) => s.trim());
          return (
            <details key={c.id} open={i === 0} className="card group">
              <summary className="flex cursor-pointer items-center gap-3 p-5 text-lg font-semibold text-navy-800 dark:text-white"><span className="text-sm text-gold-700 dark:text-gold-300">Example {c.number.split(".")[1]}</span>{c.title}</summary>
              <div className="border-t border-slate-200 p-5 dark:border-white/10">
                {flow && <ol aria-label="Workflow" className="mb-5 flex flex-wrap items-center gap-2 text-sm">{flow.map((s, j) => <li key={j} className="flex items-center gap-2"><span className="rounded-full bg-navy-50 px-3 py-1 font-medium text-navy-800 dark:bg-white/10 dark:text-white">{s}</span>{j < flow.length - 1 && <span aria-hidden>→</span>}</li>)}</ol>}
                <dl className="divide-y divide-slate-200 text-sm leading-6 dark:divide-white/10">
                  {c.rows.map(([k, v]) => <div key={k} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4"><dt className="font-semibold text-navy-800 dark:text-gold-300">{k}</dt><dd>{v}</dd></div>)}
                </dl>
                <Link href={`/research/18-practical-real-world-business-examples#${c.id}`} className="mt-3 inline-block text-sm font-semibold text-navy-700 underline underline-offset-4 dark:text-gold-300">Read in the full paper</Link>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
