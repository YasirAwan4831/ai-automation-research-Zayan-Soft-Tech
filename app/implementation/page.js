import Link from "next/link";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Timeline from "@/components/ui/Timeline";
import { implementationSteps, getSection } from "@/lib/content";

export const metadata = { title: "Implementation approach", description: "The nine-step framework for introducing AI automation: from identifying repetitive tasks to continuous improvement." };

export default function Implementation() {
  const s = getSection("22-implementation-approach");
  const intro = s.blocks.filter((b) => b.type === "p");
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Implementation" }]} />
      <h1 className="font-serif text-4xl font-bold text-navy-800 dark:text-white">Implementation approach</h1>
      <p className="mt-3 font-serif text-lg leading-8">{intro[0].text}</p>
      <div className="mt-10"><Timeline steps={implementationSteps()} /></div>
      <p className="mt-10 font-serif text-lg leading-8">{intro[intro.length - 1].text}</p>
      <p className="mt-6 text-sm leading-6">Before choosing tools, read the <Link className="font-semibold underline underline-offset-4" href="/research/21-challenges-and-considerations">challenges and considerations</Link>, and the <Link className="font-semibold underline underline-offset-4" href="/research/23-future-potential-of-ai-automation">future potential</Link> of the technology.</p>
    </div>
  );
}
