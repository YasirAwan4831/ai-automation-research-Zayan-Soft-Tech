import Link from "next/link";
import { workflows } from "@/data/workflows";

export default function WorkflowDiagram({ id, showIntro = true, headingLevel = "h3" }) {
  const wf = workflows[id];
  const Heading = headingLevel;
  return (
    <figure className="not-prose my-8 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-6 dark:border-white/10 dark:bg-navy-900">
      <figcaption className="mb-4">
        <Heading className="font-sans text-lg font-semibold text-navy-800 dark:text-white">{wf.title}</Heading>
        {showIntro && <p className="mt-1 font-sans text-sm leading-6 text-slate-600 dark:text-slate-300">{wf.intro}</p>}
      </figcaption>
      <ol className="font-sans">
        {wf.steps.map(([title, desc], i) => (
          <li key={title} className="relative flex gap-4 pb-5 last:pb-0">
            {i < wf.steps.length - 1 && <span aria-hidden className="absolute left-4 top-9 h-[calc(100%-2rem)] w-px bg-navy-200 dark:bg-white/20" />}
            <span aria-hidden className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-800 text-sm font-bold text-white dark:bg-gold-500 dark:text-navy-950">{i + 1}</span>
            <div className="pt-1"><p className="font-semibold leading-snug text-navy-800 dark:text-white"><span className="sr-only">Step {i + 1}: </span>{title}</p>{desc && <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{desc}</p>}</div>
          </li>
        ))}
      </ol>
      {showIntro && <Link href={wf.sectionHref} className="mt-4 inline-block font-sans text-sm font-semibold text-navy-700 underline underline-offset-4 dark:text-gold-300">Read the full explanation</Link>}
    </figure>
  );
}
