import { Section, Eyebrow } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/content/profile";

export function About() {
  return (
    <Section id="about" bg="white" ariaLabel="About">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>About</Eyebrow>
            <h2
              id="about-heading"
              className="font-display font-extrabold text-[28px] md:text-[36px] leading-[1.12] tracking-[-0.02em]"
            >
              A bit about{" "}
              <span className="font-accent text-violet">how I work</span>
            </h2>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-6">
          {profile.aboutParagraphs.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className="text-[17px] md:text-lg text-slate leading-[1.7] max-w-[62ch]">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
