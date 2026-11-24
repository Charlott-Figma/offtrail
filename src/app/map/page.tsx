import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Map",
  description: "See Offtrail events on the map.",
};

export default function MapPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-8 pb-24 pt-40 text-center text-[var(--otds-white-100)]">
      <p className="type-caption-1 text-[var(--otds-color-tertiary)]">
        Coming soon
      </p>
      <h1 className="type-headline-2 md:type-headline-1 max-w-3xl">Map</h1>
      <p className="type-body-1 max-w-xl text-[var(--otds-white-100)]/70">
        An interactive map of upcoming events. Pan, zoom, and tap a pin to jump
        into the event detail.
      </p>
    </section>
  );
}
