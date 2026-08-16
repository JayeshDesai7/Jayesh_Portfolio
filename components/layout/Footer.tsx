import { Container } from "@/components/layout/Container";
import { profile } from "@/content/profile";

const links = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#path", label: "Path" },
  { href: "/#contact", label: "Contact" },
];

const connectCards = [
  {
    label: "LinkedIn",
    sub: "Professional profile",
    href: profile.socials.linkedin,
    icon: "in",
  },
  {
    label: "GitHub",
    sub: "Code and projects",
    href: profile.socials.github,
    icon: "gh",
  },
  {
    label: "Email",
    sub: "Direct line",
    href: `mailto:${profile.email}`,
    icon: "@",
  },
];

export function Footer() {
  return (
    <footer className="bg-butter">
      <Container className="py-16 md:py-20">
        <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-ink tracking-[-0.02em] mb-10">
          Let&apos;s <span className="font-accent">connect</span>
        </h2>

        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {connectCards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between bg-white rounded-2xl p-5 border border-ink/10 transition-all duration-200 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_24px_60px_-30px_rgba(15,15,22,0.4)]"
            >
              <div>
                <p className="font-display font-bold text-ink text-[15px]">
                  {c.label}
                </p>
                <p className="text-[13px] text-slate">{c.sub}</p>
              </div>
              <span
                aria-hidden="true"
                className="h-10 w-10 rounded-full bg-violet-tint text-violet-deep flex items-center justify-center font-mono text-sm shrink-0"
              >
                {c.icon}
              </span>
            </a>
          ))}
        </div>

        <div className="h-px bg-ink/15 mb-8" aria-hidden="true" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-ink">
          <div className="flex items-center gap-2.5">
            <span className="h-7 w-7 rounded-full bg-ink flex items-center justify-center text-white font-mono text-xs">
              JD
            </span>
            <span className="font-display font-bold text-sm">
              Jayesh Desai
            </span>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-medium hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-[13px] text-ink/70">
            © 2026 Jayesh Desai
          </p>
        </div>
      </Container>
    </footer>
  );
}
