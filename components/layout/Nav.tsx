"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { profile } from "@/content/profile";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#path", label: "Path" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const lastScroll = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (window.innerWidth < 768) {
        setHidden(y > lastScroll.current && y > 120);
      } else {
        setHidden(false);
      }
      lastScroll.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.split("#")[1]))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`/#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
      if (e.key === "Tab" && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll<HTMLElement>(
          "a, button"
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-white/72 backdrop-blur-md border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-[1200px] h-[72px] px-5 md:px-10 lg:px-20 flex items-center justify-between"
      >
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="h-7 w-7 rounded-full bg-violet flex items-center justify-center text-white font-mono text-xs font-medium">
            JD
          </span>
          <span className="font-display font-bold text-base text-ink">
            Jayesh Desai
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative text-sm font-medium text-ink pb-1.5 transition-colors ${
                  active === l.href ? "text-violet" : "hover:text-violet"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 bg-violet rounded-full transition-all duration-200 ${
                    active === l.href ? "w-3/5" : "w-0"
                  }`}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-ink text-white px-5 py-2.5 text-sm font-display font-bold hover:bg-black transition-colors"
          >
            Resume
            <Download size={15} strokeWidth={2.4} aria-hidden="true" />
          </a>
          <button
            ref={hamburgerRef}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full hover:bg-white/60"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="lg:hidden fixed inset-0 top-[72px] bg-cream z-40 flex flex-col justify-between p-8"
        >
          <ul className="flex flex-col gap-2 mt-4">
            {links.map((l, i) => (
              <li
                key={l.href}
                className="animate-[fadeUp_0.3s_ease_forwards] opacity-0"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display font-bold text-3xl text-ink block py-3"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-violet text-white px-6 py-4 text-base font-display font-bold"
          >
            Download resume
          </a>
        </div>
      )}
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
