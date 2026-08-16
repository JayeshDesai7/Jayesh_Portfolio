import { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  id,
  bg = "cream",
  ariaLabel,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  bg?: "cream" | "white" | "cream-deep" | "butter";
  ariaLabel: string;
  className?: string;
}) {
  const bgMap: Record<string, string> = {
    cream: "bg-cream",
    white: "bg-white",
    "cream-deep": "bg-cream-deep",
    butter: "bg-butter",
  };

  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      aria-label={id ? undefined : ariaLabel}
      className={`${bgMap[bg]} py-18 md:py-24 lg:py-32 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.12em] text-slate mb-4">
      {children}
    </p>
  );
}
