import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4 text-center">
      <div>
        <h1 className="font-display text-7xl font-black uppercase">Page not found</h1>
        <p className="mt-4 text-muted">That page doesn&apos;t exist.</p>
        <Link href="/" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-ink px-6 font-semibold text-bg">Back to home</Link>
      </div>
    </main>
  );
}
