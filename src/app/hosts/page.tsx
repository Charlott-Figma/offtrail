import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hosts",
  description: "Meet the locals leading Offtrail events.",
};

export default function HostsPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-8 pb-24 pt-40 text-center text-[var(--otds-white-100)]">
      <p className="type-caption-1 text-[var(--otds-color-tertiary)]">
        Coming soon
      </p>
      <h1 className="type-headline-2 md:type-headline-1 max-w-3xl">
        Hosts
      </h1>
      <p className="type-body-1 max-w-xl text-[var(--otds-white-100)]/70">
        Browse the people running Offtrail events in your area, from new hosts
        to long-running super hosts. Profiles, past events, and how to reach
        them.
      </p>
    </section>
  );
}
