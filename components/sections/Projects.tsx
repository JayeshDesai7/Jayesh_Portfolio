import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { otherProjects } from "@/content/projects";
import { profile } from "@/content/profile";

export function Projects() {
  return (
    <Section id="projects" bg="white" ariaLabel="More projects">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <Eyebrow>Projects</Eyebrow>
          <h2 id="projects-heading" className="font-display font-extrabold text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.02em]">
            More things{" "}
            <span className="font-accent text-violet">I&apos;ve built</span>
          </h2>
        </div>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-ink underline decoration-hairline decoration-2 underline-offset-4 hover:decoration-violet whitespace-nowrap inline-flex items-center gap-1"
        >
          View all on GitHub
          <ArrowUpRight size={14} strokeWidth={2.4} aria-hidden="true" />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {otherProjects.map((project, i) => {
          const CardInner = (
            <>
              <div className="aspect-[16/10] rounded-xl bg-cream-deep mb-5 overflow-hidden flex items-center justify-center relative">
                {project.coverImage ? (
                  <Image
                    src={project.coverImage}
                    alt={`${project.title} cover illustration`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <span className="font-mono text-xs text-slate">
                    {project.category}
                  </span>
                )}
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[13px] text-slate mb-3">
                    {project.category} · {project.date}
                  </p>
                  <p className="text-[15px] text-slate leading-relaxed">
                    {project.tagline}
                  </p>
                </div>
                <span className="h-9 w-9 shrink-0 rounded-full bg-violet text-white flex items-center justify-center transition-transform duration-200 group-hover:rotate-45">
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
            </>
          );

          const cardClasses =
            "group block bg-white border border-hairline rounded-[20px] p-5 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-30px_rgba(20,20,28,0.22)]";

          return (
            <Reveal key={project.slug} delay={i * 70}>
              {project.hasCaseStudy ? (
                <Link href={`/projects/${project.slug}`} className={cardClasses}>
                  {CardInner}
                </Link>
              ) : (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClasses}
                >
                  {CardInner}
                </a>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
