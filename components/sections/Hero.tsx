import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Tags";
import { Container } from "@/components/layout/Container";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="bg-cream pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24"
    >
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.12em] text-slate mb-5">
              B.Tech CSE · Indus University · Class of 2026
            </p>
            <h1 className="font-display font-extrabold text-ink leading-[1.05] tracking-[-0.03em] text-[clamp(32px,5.2vw,68px)] mb-6">
              {profile.heroTitle.lead}{" "}
              <span className="font-accent text-violet">
                {profile.heroTitle.accent}
              </span>
            </h1>
            <p className="text-[16px] md:text-lg text-slate leading-[1.7] max-w-[46ch] mb-7">
              {profile.heroSubtitle}
            </p>
            <div className="mb-8">
              <Pill>{profile.availability.label}</Pill>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 items-stretch sm:items-center">
              <Button href="#work" variant="primary">
                View my work
              </Button>
              <Button href={profile.resumeUrl} variant="secondary" external>
                Download resume
              </Button>
              <a
                href={`mailto:${profile.email}`}
                className="font-mono text-sm text-ink underline decoration-hairline decoration-2 underline-offset-4 hover:decoration-violet text-center sm:text-left whitespace-nowrap shrink-0"
              >
                {profile.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-[240px] h-[280px] md:w-[340px] md:h-[400px]">
              <div
                className="blob-shape absolute inset-0 bg-butter"
                aria-hidden="true"
              />
              <div className="absolute inset-[10%] flex items-center justify-center overflow-hidden rounded-[32%]">
                <Image
                  src="/images/portrait.png"
                  alt="Portrait of Jayesh Desai"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
