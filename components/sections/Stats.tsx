import { Container } from "@/components/layout/Container";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { stats } from "@/content/profile";

export function Stats() {
  return (
    <section aria-label="Key figures" className="bg-cream-deep py-14 md:py-16">
      <Container>
        <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
          <div className="flex items-center gap-4">
            <span className="hidden md:block w-20 h-px bg-ink" aria-hidden="true" />
            <p className="font-display font-bold text-xl whitespace-nowrap">
              Some <span className="font-accent text-violet">numbers</span>
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <a href={s.href} className="block group">
                  <CountUp
                    value={s.value}
                    suffix={s.suffix}
                    decimals={s.decimals}
                  />
                  <p className="text-[13px] text-slate mt-1 leading-snug group-hover:text-violet transition-colors">
                    {s.label}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
