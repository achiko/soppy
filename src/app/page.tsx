import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">Hello.</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400">
        A minimal Next.js app — three pages, App Router, Tailwind, and not much
        else.
      </p>
      <div className="flex gap-3 pt-2">
        <Link
          href="/about"
          className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors"
        >
          Learn more
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900 transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
