import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  external?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-display font-bold whitespace-nowrap shrink-0 transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-violet focus-visible:outline-offset-2";

  const variants: Record<string, string> = {
    primary: "bg-violet text-white hover:bg-violet-deep hover:shadow-[0_12px_28px_-10px_rgba(91,61,240,0.55)]",
    secondary:
      "border-2 border-ink text-ink bg-transparent hover:bg-ink hover:text-white",
    tertiary:
      "text-ink underline decoration-hairline decoration-2 underline-offset-4 hover:decoration-violet font-mono text-sm px-0 py-0 rounded-none",
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const isAnchor = href.startsWith("#");

  if (isAnchor) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
