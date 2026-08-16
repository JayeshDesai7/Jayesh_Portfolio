import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { projects } from "@/content/projects";

const project = projects.find((p) => p.slug === "animal-classifier")!;

export const metadata: Metadata = {
  title: `${project.title} — Jayesh Desai`,
  description: project.tagline,
  alternates: { canonical: "/projects/animal-classifier" },
  openGraph: {
    title: project.title,
    description: project.tagline,
    type: "article",
  },
};

export default function AnimalClassifierPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.tagline,
    dateCreated: project.date,
    creator: { "@type": "Person", name: "Jayesh Desai" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main" className="pt-32 pb-24 bg-cream">
        <Container>
          <Link
            href="/#work"
            className="font-mono text-sm text-slate hover:text-violet inline-flex items-center gap-1 mb-8"
          >
            <ArrowLeft size={14} strokeWidth={2.4} aria-hidden="true" />
            Back to home
          </Link>

          <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate mb-4">
            {project.category} · {project.date}
          </p>
          <h1 className="font-display font-extrabold text-[32px] md:text-[48px] leading-[1.08] tracking-[-0.02em] mb-4 max-w-3xl">
            {project.title}
          </h1>
          <p className="font-accent text-violet text-xl md:text-2xl mb-8 max-w-2xl">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.stack.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-hairline text-slate"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-14">
            {project.links.github && (
              <Button href={project.links.github} variant="primary" external>
                View on GitHub
                <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
              </Button>
            )}
            <Button href="/#contact" variant="secondary">
              Get in touch
            </Button>
          </div>

          <div className="bg-white rounded-[24px] p-8 md:p-12 mb-12 border border-hairline shadow-[0_20px_50px_-35px_rgba(15,15,22,0.35)]">
            <h2 className="font-display font-bold text-2xl mb-4">
              The problem
            </h2>
            <p className="text-slate leading-[1.7] max-w-[70ch]">
              {project.problem}
            </p>
          </div>

          <div className="bg-white rounded-[24px] p-8 md:p-12 mb-12 border border-hairline shadow-[0_20px_50px_-35px_rgba(15,15,22,0.35)]">
            <h2 className="font-display font-bold text-2xl mb-6">
              What it does
            </h2>
            <ul className="space-y-4">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-slate leading-relaxed">
                  <span className="text-violet mt-1.5 shrink-0" aria-hidden="true">
                    ·
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-slate text-[15px] max-w-2xl">
            Full source, the training notebook, and evaluation metrics are on
            GitHub.
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
