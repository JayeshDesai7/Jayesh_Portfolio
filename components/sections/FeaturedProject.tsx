"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/layout/Container";
import { MonoTag } from "@/components/ui/Tags";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { featuredProject } from "@/content/projects";

export function FeaturedProject() {
  const railRef = useRef<HTMLDivElement>(null);
  const [litCount, setLitCount] = useState(0);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      const id = requestAnimationFrame(() => {
        setLitCount(featuredProject.pipeline?.length ?? 0);
      });
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = featuredProject.pipeline?.length ?? 0;
            let i = 0;
            const interval = setInterval(() => {
              i += 1;
              setLitCount(i);
              if (i >= steps) clearInterval(interval);
            }, 220);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="work" bg="cream" ariaLabel="Featured project">
      <Reveal>
        <Eyebrow>Flagship project · {featuredProject.date}</Eyebrow>
      </Reveal>

      <div className="bg-white rounded-[24px] p-6 md:p-10 lg:p-12 border border-hairline shadow-[0_24px_60px_-30px_rgba(15,15,22,0.28)]">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-12">
          <div>
            <h2
              id="work-heading"
              className="font-display font-extrabold text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em] mb-4"
            >
              {featuredProject.title}
            </h2>
            <p className="font-accent text-violet text-lg md:text-xl mb-5">
              {featuredProject.tagline}
            </p>
            <p className="text-slate leading-[1.7] mb-6 max-w-[60ch]">
              {featuredProject.problem}
            </p>

            {featuredProject.detailChips && (
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.detailChips.map((chip) => (
                  <MonoTag key={chip}>{chip}</MonoTag>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-8">
              {featuredProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-hairline text-slate"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                href={`/projects/${featuredProject.slug}`}
                variant="primary"
              >
                Read the case study
                <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
              </Button>
              {featuredProject.links.github && (
                <Button
                  href={featuredProject.links.github}
                  variant="secondary"
                  external
                >
                  View on GitHub
                  <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </Button>
              )}
            </div>
          </div>

          <div className="rounded-[16px] bg-cream border border-hairline p-6 flex flex-col justify-center">
            <ul className="space-y-3">
              {featuredProject.highlights.map((h) => (
                <li key={h} className="text-[14px] text-slate leading-relaxed flex gap-2">
                  <span className="text-violet mt-1" aria-hidden="true">
                    ·
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pipeline — the signature moment */}
        <div ref={railRef} className="mt-12 pt-10 border-t border-hairline">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-slate mb-8">
            How it works
          </p>

          {/* Desktop: 4-column grid (wraps to 2 rows for the 8-step pipeline) */}
          <div className="hidden md:grid grid-cols-4 gap-x-6 gap-y-10">
            {featuredProject.pipeline?.map((p, i) => (
              <div key={p.step} className="flex flex-col items-start">
                <span
                  className={`h-11 w-11 rounded-full flex items-center justify-center font-mono text-sm mb-4 transition-colors duration-300 ${
                    i < litCount
                      ? "bg-violet text-white"
                      : "bg-white border border-hairline text-slate"
                  }`}
                >
                  {p.step}
                </span>
                <p className="font-display font-bold text-sm mb-1">
                  {p.tool}
                </p>
                <p className="text-[13px] text-slate leading-snug">
                  {p.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical rail */}
          <div className="md:hidden relative pl-6">
            <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-hairline" aria-hidden="true" />
            <div
              className="absolute left-[15px] top-2 w-0.5 bg-violet transition-all duration-500 ease-out"
              style={{
                height: `${
                  (litCount / (featuredProject.pipeline?.length ?? 1)) * 100
                }%`,
              }}
              aria-hidden="true"
            />
            <div className="space-y-6">
              {featuredProject.pipeline?.map((p, i) => (
                <div key={p.step} className="relative flex gap-4">
                  <span
                    className={`absolute -left-6 h-8 w-8 rounded-full flex items-center justify-center font-mono text-xs shrink-0 transition-colors duration-300 ${
                      i < litCount
                        ? "bg-violet text-white"
                        : "bg-white border border-hairline text-slate"
                    }`}
                  >
                    {p.step}
                  </span>
                  <div className="pl-8">
                    <p className="font-display font-bold text-sm mb-1">
                      {p.tool}
                    </p>
                    <p className="text-[13px] text-slate leading-snug">
                      {p.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
