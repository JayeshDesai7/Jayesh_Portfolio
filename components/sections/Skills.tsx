import { Section, Eyebrow } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { skillStages, supportingStack } from "@/content/skills";

export function Skills() {
  return (
    <Section id="skills" bg="cream-deep" ariaLabel="Skills and tech stack">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-6">
          <Eyebrow>What I work with</Eyebrow>
          <h2
            id="skills-heading"
            className="font-display font-extrabold text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.02em] mb-8"
          >
            A pipeline, roughly —{" "}
            <span className="font-accent text-violet">not a skill list</span>
          </h2>

          <div>
            {skillStages.map((stage, i) => (
              <Reveal key={stage.index} delay={i * 80}>
                <div className="group border-t border-hairline py-6 first:border-t transition-all duration-200 hover:border-t-2 hover:border-t-violet hover:pl-1.5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-[13px] text-slate">
                        {stage.index}
                      </span>
                      <h3 className="font-display font-bold text-[22px] md:text-[26px] mt-1 mb-3">
                        {stage.name}
                      </h3>
                      <div className="flex flex-wrap gap-x-3 gap-y-2">
                        {stage.items.map((item) => (
                          <span
                            key={item}
                            className="text-[14px] text-slate before:content-['·'] before:text-violet before:mr-1.5 first:before:content-none"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="h-9 w-9 shrink-0 rounded-full bg-white border border-hairline flex items-center justify-center transition-transform duration-200 group-hover:rotate-45 group-hover:bg-violet group-hover:text-white group-hover:border-violet">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M4 12L12 4M12 4H5M12 4V11"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-hairline" aria-hidden="true" />
          </div>
        </div>

        <div className="lg:col-span-6">
          <Reveal>
            <div className="bg-white rounded-[20px] p-8 h-full flex flex-col justify-center border border-hairline shadow-[0_20px_50px_-35px_rgba(15,15,22,0.35)]">
              <p className="text-slate leading-relaxed mb-6 max-w-[46ch]">
                Data preprocessing and model evaluation are where most of the
                real work happens — the tools below are what I reach for to
                get there.
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-slate mb-4">
                {supportingStack.heading}
              </p>
              <div className="flex flex-wrap gap-2">
                {supportingStack.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1.5 rounded-full border border-hairline text-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
