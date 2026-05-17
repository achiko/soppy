export default function About() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
        This is a small starter built with Next.js App Router and Tailwind CSS.
        It exists to show how little you really need: a layout, a nav, and a
        couple of pages.
      </p>
      <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1">
        <li>Next.js 15 with the App Router</li>
        <li>TypeScript and Tailwind CSS</li>
        <li>Three pages, one shared layout</li>
      </ul>
    </section>
  );
}
