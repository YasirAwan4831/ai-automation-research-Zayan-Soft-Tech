import Link from "next/link";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import WorkflowDiagram from "@/components/workflows/WorkflowDiagram";

export const metadata = { title: "AI automation workflows", description: "Visual workflows from the research: the general nine-step sample workflow, connecting departments and the journey of a lead." };

export default function Workflows() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Workflows" }]} />
      <h1 className="font-serif text-4xl font-bold text-navy-800 dark:text-white">AI automation workflows</h1>
      <p className="mt-3 max-w-[65ch] font-serif text-lg leading-8">The diagrams below mirror the workflows in the paper. Each one links to the section that explains it in full, including the stage tables and human checkpoints.</p>
      <WorkflowDiagram id="general" headingLevel="h2" />
      <WorkflowDiagram id="department" headingLevel="h2" />
      <WorkflowDiagram id="lead" headingLevel="h2" />
      <p className="mt-6 leading-7">More workflows appear in <Link className="font-semibold underline underline-offset-4" href="/research/4-ai-automation-for-products">answering a product inquiry</Link>, <Link className="font-semibold underline underline-offset-4" href="/research/10-faster-customer-inquiry-responses">the customer-support workflow</Link> and the <Link className="font-semibold underline underline-offset-4" href="/use-cases">eight business use cases</Link>.</p>
    </div>
  );
}
