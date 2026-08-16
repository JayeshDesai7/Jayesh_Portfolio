import { Section, Eyebrow } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { certifications } from "@/content/certifications";

export function Certifications() {
  return (
    <Section bg="cream" ariaLabel="Certifications" className="pt-0 md:pt-0 lg:pt-0">
      <Eyebrow>Certifications</Eyebrow>
      <h2 className="font-display font-extrabold text-[24px] md:text-[28px] leading-[1.15] tracking-[-0.02em] mb-8">
        Formal record
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((cert, i) => {
          const inner = (
            <>
              <span className="font-mono text-xs h-8 w-8 rounded-full bg-violet-tint text-violet-deep flex items-center justify-center mb-4">
                {cert.issuer[0]}
              </span>
              <h3 className="font-display font-semibold text-[15px] leading-snug mb-2">
                {cert.title}
              </h3>
              <p className="text-[13px] text-slate">{cert.issuer}</p>
              <p className="font-mono text-[12px] text-slate mt-1">
                {cert.date}
              </p>
            </>
          );
          return (
            <Reveal key={cert.title} delay={i * 60}>
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-[16px] p-5 border border-hairline hover:shadow-[0_24px_60px_-30px_rgba(20,20,28,0.22)] transition-shadow"
                >
                  {inner}
                </a>
              ) : (
                <div className="bg-white rounded-[16px] p-5 border border-hairline">
                  {inner}
                </div>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
