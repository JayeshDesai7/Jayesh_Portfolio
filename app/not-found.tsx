import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-slate mb-4">404</p>
      <h1 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
        That page doesn&apos;t exist.
      </h1>
      <p className="text-slate mb-8 max-w-md">
        The link might be old, or mistyped. Head back to the homepage.
      </p>
      <Link
        href="/"
        className="inline-flex items-center rounded-full bg-violet text-white px-6 py-3 font-display font-bold"
      >
        Back to home
      </Link>
    </main>
  );
}
