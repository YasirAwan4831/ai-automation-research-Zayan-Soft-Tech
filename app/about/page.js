import Image from "next/image";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { ZayanLogo } from "@/components/ui/Logo";
import { site } from "@/data/site";

export const metadata = { title: "About the research", description: "Research information and author: Muhammad Yasir, AI Automation Intern at Zayan Soft Tech." };

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <h1 className="font-serif text-4xl font-bold text-navy-800 dark:text-white">About the research</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <section aria-labelledby="meta" className="card p-6">
          <h2 id="meta" className="text-xl font-semibold text-navy-800 dark:text-white">Research information</h2>
          <dl className="mt-4 divide-y divide-slate-200 text-sm leading-6 dark:divide-white/10">
            {site.metadata.map(([k, v]) => <div key={k} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr]"><dt className="font-semibold text-navy-800 dark:text-gold-300">{k}</dt><dd>{v}</dd></div>)}
          </dl>
          <div className="mt-4"><ZayanLogo height={48} /></div>
        </section>
        <section aria-labelledby="author" className="card overflow-hidden">
          <Image src="/images/profile.jpg" alt="Portrait of Muhammad Yasir" width={1200} height={800} sizes="(min-width: 768px) 480px, 100vw" className="h-auto w-full" />
          <div className="p-6">
            <h2 id="author" className="text-xl font-semibold text-navy-800 dark:text-white">{site.author}</h2>
            <p className="text-sm text-gold-700 dark:text-gold-300">AI Automation Intern · {site.organization}</p>
            <p className="mt-3 leading-7">This paper is Muhammad Yasir’s first practical assignment as an AI Automation Intern at Zayan Soft Tech. It explains AI automation for a business owner or manager without a technical background.</p>
            <blockquote className="mt-4 border-l-4 border-gold-500 pl-4 font-serif italic leading-7">“I see my role as helping clients understand their own processes first and then build practical automation solutions that deliver clear value for their business.”</blockquote>
          </div>
        </section>
      </div>
    </div>
  );
}
