export function MonoTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-violet-tint text-violet-deep">
      {children}
    </span>
  );
}

export function Pill({
  children,
  dotColor = "success",
}: {
  children: React.ReactNode;
  dotColor?: "success" | "violet";
}) {
  const dot = dotColor === "success" ? "bg-success" : "bg-violet";
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white border border-hairline px-4 py-2 text-sm text-slate">
      <span className={`h-2 w-2 rounded-full ${dot}`} aria-hidden="true" />
      {children}
    </span>
  );
}

export function TypeTag({ kind }: { kind: "experience" | "education" }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.08em] border border-hairline rounded-full px-3 py-1 text-slate">
      {kind === "education" ? "Education" : "Experience"}
    </span>
  );
}

export function ArrowButton({ rotated = false }: { rotated?: boolean }) {
  return (
    <span
      className={`inline-flex items-center justify-center h-9 w-9 rounded-full bg-violet text-white transition-transform duration-200 ${
        rotated ? "rotate-45" : "group-hover:rotate-45"
      }`}
      aria-hidden="true"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M4 12L12 4M12 4H5M12 4V11"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
