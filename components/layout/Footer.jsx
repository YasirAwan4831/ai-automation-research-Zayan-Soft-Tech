import Link from "next/link";
import { nav, site } from "@/data/site";
import { ZayanLogo } from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="mt-20 bg-navy-900 text-slate-300">
      <div className="mx-auto grid max-w-[90rem] gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-3">
          <ZayanLogo height={44} />
          <p className="text-lg font-semibold text-white">{site.shortTitle}</p>
          <p className="text-sm">Prepared by {site.author} · {site.program} · {site.organization}</p>
          <p className="text-sm italic text-gold-300">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>)}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
