import { Section, Eyebrow } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TypeTag } from "@/components/ui/Tags";
import { timeline } from "@/content/timeline";

export function Path() {
  return (
    <Section id="path" bg="cream" ariaLabel="Experience and education">
      <Eyebrow>Path</Eyebrow>
      <h2
        id="path-heading"
        className="font-display font-extrabold text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.02em] mb-12"
      >
        Where I&apos;ve <span className="font-accent text-violet">been</span>
      </h2>

      <div className="relative pl-6 md:pl-10">
        <div
          className="absolute left-[3px] md:left-[7px] top-2 bottom-2 w-0.5 bg-hairline"
          aria-hidden="true"
        />
        <div className="space-y-10 md:space-y-12">
          {timeline.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 90}>
              <div className="relative">
                <span
                  className="absolute -left-[27px] md:-left-[43px] top-1.5 h-3 w-3 rounded-full bg-violet ring-4 ring-cream"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="font-mono text-[13px] text-slate">
                    {entry.date}
                  </span>
                  <TypeTag kind={entry.kind} />
                </div>
                <h3 className="font-display font-bold text-[18px] md:text-[22px] leading-snug mb-1.5 max-w-[60ch]">
                  {entry.title}
                </h3>
                <p className="text-[14px] text-slate mb-2">
                  {entry.organisation} · {entry.location}
                </p>
                <p className="text-[15px] text-slate leading-relaxed max-w-[60ch]">
                  {entry.summary}
                </p>
                {entry.bullets && (
                  <ul className="mt-3 space-y-1.5">
                    {entry.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-[14px] text-slate leading-relaxed flex gap-2 max-w-[58ch]"
                      >
                        <span className="text-violet mt-1" aria-hidden="true">
                          ·
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
