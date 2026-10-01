import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, Workflow, Table2, ListChecks, FileText } from "lucide-react";
import { site } from "@/data/site";
import { workflows } from "@/data/workflows";
import { sections, concepts, useCases, implementationSteps, getSection } from "@/lib/content";

const tableCount = sections.reduce((n, s) => n + s.blocks.filter((b) => b.type === "table" || b.type === "keyvalue").length, 0);

export default function Home() {
  const benefits = getSection("3-why-businesses-need-ai-automation").blocks.filter((b) => b.type === "h2");
  const highlights = [
    [FileText, "33 pages", "Original research paper, kept in full"],
    [BookOpen, `${sections.length} sections`, "Executive summary plus 25 numbered chapters"],
    [Table2, `${tableCount} tables`, "Converted to responsive tables"],
    [Briefcase, `${useCases().length} business examples`, "E-commerce to retail"],
    [Workflow, "Sample workflow", "Nine steps from message to report"],
    [ListChecks, `${implementationSteps().length}-step approach`, "From repetitive tasks to continuous improvement"],
  ];
  return (
    <>
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white">
        <div className="mx-auto grid max-w-[90rem] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:py-24">
          <div>
            <p className="text-sm font-semibold text-gold-300">{site.program} · {site.organization}</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{site.title}</h1>
            <p className="mt-4 max-w-[52ch] text-lg text-navy-100">{site.subtitle}</p>
            <p className="mt-4 max-w-[60ch] leading-7 text-slate-300">A detailed study of how AI and automation help businesses improve efficiency, productivity, customer communication, lead management, reporting, data processing and business growth.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/research" className="btn btn-primary">Explore Research <ArrowRight size={16} aria-hidden /></Link>
              <Link href="/research/executive-summary" className="btn btn-ghost">Read Full Documentation</Link>
              <Link href="/use-cases" className="btn btn-ghost">Business Use Cases</Link>
              <Link href="/workflows" className="btn btn-ghost">AI Automation Workflows</Link>
            </div>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur" aria-label="Workflow preview">
            <p className="mb-3 text-sm font-semibold text-gold-300">From message to report</p>
            <ol className="space-y-2">
              {workflows.general.steps.slice(0, 5).map(([t], i) => (
                <li key={t} className="flex items-center gap-3 rounded-lg bg-white/10 px-3 py-2 text-sm"><span aria-hidden className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 text-xs font-bold text-navy-950">{i + 1}</span>{t}</li>
              ))}
              <li className="px-3 text-sm text-slate-300">…and four more steps through to reporting.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 py-14 sm:px-6" aria-labelledby="highlights">
        <h2 id="highlights" className="font-serif text-3xl font-bold text-navy-800 dark:text-white">Research at a glance</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(([Icon, big, small]) => (
            <li key={big} className="card flex items-start gap-4 p-5"><Icon className="mt-1 shrink-0 text-gold-600" size={22} aria-hidden /><div><p className="font-semibold text-navy-800 dark:text-white">{big}</p><p className="text-sm text-slate-600 dark:text-slate-300">{small}</p></div></li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 py-6 sm:px-6" aria-labelledby="concepts">
        <h2 id="concepts" className="font-serif text-3xl font-bold text-navy-800 dark:text-white">AI, automation and AI automation</h2>
        <p className="mt-2 max-w-[65ch] leading-7">Three related terms that are often mixed up, as defined in section 2 of the paper.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {concepts().map(([term, meaning, example]) => (
            <article key={term} className="card p-5">
              <h3 className="text-lg font-semibold text-navy-800 dark:text-white">{term}</h3>
              <p className="mt-2 text-sm leading-6">{meaning}</p>
              <p className="mt-3 border-t border-slate-200 pt-3 text-sm leading-6 text-slate-600 dark:border-white/10 dark:text-slate-300"><span className="font-semibold">Business example: </span>{example}</p>
            </article>
          ))}
        </div>
        <Link href="/research/2-understanding-ai-automation" className="mt-4 inline-block text-sm font-semibold text-navy-700 underline underline-offset-4 dark:text-gold-300">Read the full section, including traditional vs AI-powered automation</Link>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 py-14 sm:px-6" aria-labelledby="needs">
        <h2 id="needs" className="font-serif text-3xl font-bold text-navy-800 dark:text-white">Why businesses need AI automation</h2>
        <p className="mt-2 max-w-[65ch] leading-7">Twelve areas, each with the problem, how automation helps, the practical benefit and an example.</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <li key={b.id}><Link href={`/research/3-why-businesses-need-ai-automation#${b.id}`} className="card flex h-full gap-3 p-4 transition-colors hover:border-gold-500"><span className="font-semibold tabular-nums text-gold-700 dark:text-gold-300">{b.number}</span><span className="font-medium text-navy-800 dark:text-white">{b.text}</span></Link></li>
          ))}
        </ul>
      </section>
    </>
  );
}
