"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";
import { MyLogo } from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Search from "./Search";

const BENEFITS = "/research/3-why-businesses-need-ai-automation";
const isActive = (path, href) => {
  if (href === "/") return path === "/";
  if (href === BENEFITS) return path === BENEFITS;
  if (href === "/research") return path.startsWith("/research") && path !== BENEFITS;
  return path.startsWith(href);
};

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const cls = (href) => (isActive(path, href) ? "bg-navy-50 font-semibold text-navy-800 dark:bg-white/10 dark:text-gold-300" : "text-slate-600 hover:text-navy-800 dark:text-slate-300 dark:hover:text-white");
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-navy-950/90">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center gap-3 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-navy-800 dark:text-white" onClick={() => setOpen(false)}>
          <MyLogo size={32} /> <span className="hidden text-sm sm:inline">{site.shortTitle}</span>
        </Link>
        <nav aria-label="Main" className="ml-4 hidden flex-1 items-center gap-1 lg:flex">
          {nav.map((n) => <Link key={n.href} href={n.href} aria-current={isActive(path, n.href) ? "page" : undefined} className={`rounded-md px-3 py-2 text-sm transition-colors ${cls(n.href)}`}>{n.label}</Link>)}
        </nav>
        <div className="ml-auto flex items-center gap-1 lg:ml-0">
          <Search />
          <ThemeToggle />
          <button type="button" className="rounded-md p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden dark:border-white/10 dark:bg-navy-950">
          <ul className="grid gap-1">
            {nav.map((n) => <li key={n.href}><Link href={n.href} onClick={() => setOpen(false)} aria-current={isActive(path, n.href) ? "page" : undefined} className={`block rounded-md px-3 py-2.5 text-sm ${cls(n.href)}`}>{n.label}</Link></li>)}
          </ul>
        </nav>
      )}
    </header>
  );
}
