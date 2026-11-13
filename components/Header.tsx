"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg shadow-sm border-b border-slate-200/50 dark:border-slate-800/50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
<Link
  href="/"
  className="group flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white"
>
  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md transition-transform group-hover:rotate-12">
    EA
  </span>
  <span className="hidden tracking-tight sm:inline">
    Eduardo <span className="text-indigo-500">Amorim Pereira</span>
  </span>
</Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/eduardowebdev"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 007.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
          <Link
            href="/contato"
            className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:brightness-110"
          >
            Vamos conversar
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 md:hidden dark:text-slate-200 dark:hover:bg-slate-800"
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 border-t border-slate-200/50 bg-white/90 px-6 py-4 backdrop-blur-lg dark:border-slate-800/50 dark:bg-slate-900/90">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <Link
              href="/contato"
              className="block rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-md"
            >
              Vamos conversar
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
