import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore",
  description: "Browse outdoor events happening near you.",
};

export default function ExplorePage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-8 pb-24 pt-40 text-center text-[var(--otds-white-100)]">
      <p className="type-caption-1 text-[var(--otds-color-tertiary)]">
        Coming soon
      </p>
      <h1 className="type-headline-2 md:type-headline-1 max-w-3xl">
        Explore
      </h1>
      <p className="type-body-1 max-w-xl text-[var(--otds-white-100)]/70">
        A full event browser is on the way — filter by activity, region, date,
        and skill level to find your next adventure.
      </p>
    </section>
  );
}
