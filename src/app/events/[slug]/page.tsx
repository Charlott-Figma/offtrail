import Image from "next/image";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { EventPageHeader } from "@/components/ui/EventPageHeader";
import { EventTile } from "@/components/ui/EventTile";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { events, getAllEventSlugs, getEvent, type EventData } from "@/lib/events";

export async function generateStaticParams() {
  return getAllEventSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return {};
  return {
    title: event.name,
    description: event.shortDescription,
  };
}

function InfoSeparator() {
  return (
    <span aria-hidden className="select-none opacity-70">
      +
    </span>
  );
}

function HostCard({ host }: { host: EventData["host"] }) {
  return (
    <div className="flex items-center gap-[var(--otds-size-padding-small)]">
      <div className="relative size-[64px] shrink-0 overflow-hidden rounded-full bg-[var(--otds-grey-500)]">
        <Image
          src={host.avatarSrc}
          alt={host.name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-[var(--otds-size-padding-small)] uppercase text-[var(--otds-white-100)]">
        <p className="type-caption-1">Hosted by</p>
        <p
          className="text-[var(--otds-size-font-medium)] leading-none [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]"
          style={{
            fontFamily: "var(--otds-font-family-headline)",
            fontVariationSettings: "var(--otds-workbench-close)",
          }}
        >
          {host.name}
        </p>
      </div>
    </div>
  );
}

function MapWidget({ address }: { address: string }) {
  return (
    <div
      role="img"
      aria-label={`Map showing ${address}`}
      className="relative h-[260px] w-full overflow-hidden rounded-[6px] bg-[var(--otds-grey-600)]"
    >
      <Image
        src="/images/map/event-map-bg.webp"
        alt=""
        fill
        sizes="445px"
        className="object-cover"
      />
      {/* Radar reticle with tick marks */}
      <Image
        src="/images/map/event-map-radial.webp"
        alt=""
        width={300}
        height={300}
        className="pointer-events-none absolute left-1/2 top-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2"
      />
      {/* Location halo — 30% orange */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[130px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--otds-orange-400)]/30"
      />
      {/* Center pin — 19px orange dot with white ring */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[19px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--otds-orange-400)] ring-[3px] ring-[var(--otds-white-100)]"
      />
    </div>
  );
}

function AttendeeAvatars({
  avatars,
  overflow,
}: {
  avatars: ReadonlyArray<string>;
  overflow?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex -space-x-[6px]">
        {avatars.map((src, i) => (
          <div
            key={i}
            className="relative size-[48px] shrink-0 overflow-hidden rounded-full border-2 border-[var(--otds-blue-200)] bg-[var(--otds-grey-500)]"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      {overflow && (
        <div className="ml-2 flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[var(--otds-blue-500)] text-center text-[var(--otds-blue-200)]">
          <span className="type-caption-1">{overflow}</span>
        </div>
      )}
    </div>
  );
}

function Introduction({ event }: { event: EventData }) {
  return (
    <section className="bg-[var(--otds-blue-200)] px-[var(--otds-size-padding-xlarge)] pt-16 pb-[var(--otds-size-padding-large)]">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
        {/* Left column */}
        <div className="flex max-w-[684px] flex-col gap-16">
          <div className="flex flex-col gap-[var(--otds-size-padding-large)]">
            <div className="flex flex-col gap-[var(--otds-size-padding-medium)]">
              <h2 className="type-subheadline-2 text-[var(--otds-white-100)]">
                {event.shortDescription}
              </h2>
              <div className="type-caption-1 flex flex-wrap items-center gap-[var(--otds-size-padding-small)] text-[var(--otds-white-100)]">
                <span>{event.dateShort}</span>
                <InfoSeparator />
                <span>{event.timeRange}</span>
                <InfoSeparator />
                <span>{event.openSpots}</span>
              </div>
            </div>
            <hr className="h-px w-full border-0 border-t border-dashed border-[var(--otds-white-100)]/30" />
            <div className="type-body-1 space-y-4 text-[var(--otds-white-100)]">
              {event.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <HostCard host={event.host} />
        </div>

        {/* Right column */}
        <div className="flex w-full max-w-[445px] flex-col gap-16">
          <div className="flex flex-col gap-[var(--otds-size-padding-large)]">
            <div className="flex flex-col gap-[var(--otds-size-padding-medium)]">
              <p className="type-caption-1 text-[var(--otds-white-100)]">
                Location
              </p>
              <p className="type-body-1 text-[var(--otds-white-100)]">
                {event.fullAddress}
              </p>
            </div>
            <MapWidget address={event.fullAddress} />
          </div>
          <div className="flex flex-col gap-[var(--otds-size-padding-large)]">
            <p className="type-caption-1 text-[var(--otds-white-100)]">
              Guest list
            </p>
            <AttendeeAvatars
              avatars={event.attendeeAvatars}
              overflow={event.attendeesOverflow}
            />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <PrimaryButton fullWidth>Register</PrimaryButton>
      </div>
    </section>
  );
}

function ImageGallery({ event }: { event: EventData }) {
  const [first, second, third] = event.galleryImages;
  if (!first || !second || !third) return null;
  return (
    <section className="flex flex-col gap-2 p-2 md:flex-row md:items-stretch">
      <div className="flex flex-col gap-2 md:w-[469px]">
        <div className="relative h-[322px] overflow-hidden rounded-[6px]">
          <Image
            src={first.src}
            alt={first.alt}
            fill
            sizes="(min-width: 768px) 469px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-[322px] overflow-hidden rounded-[6px]">
          <Image
            src={second.src}
            alt={second.alt}
            fill
            sizes="(min-width: 768px) 469px, 100vw"
            className="object-cover object-bottom"
          />
        </div>
      </div>
      <div className="relative h-[400px] overflow-hidden rounded-[6px] md:h-[652px] md:flex-1">
        <Image
          src={third.src}
          alt={third.alt}
          fill
          sizes="(min-width: 768px) calc(100vw - 485px), 100vw"
          className="object-cover object-bottom"
        />
      </div>
    </section>
  );
}

function Schedule({ items }: { items: ReadonlyArray<EventData["schedule"][number]> }) {
  return (
    <section className="relative overflow-hidden bg-[var(--otds-blue-500)] py-24 md:py-32">
      <div className="overflow-x-auto px-8">
        <div className="relative flex min-w-max gap-20 pr-32 text-[var(--otds-black-100)]">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative flex w-[340px] shrink-0 flex-col gap-[92px] text-center"
            >
              <p className="type-headline-1">{item.time}</p>
              <div className="flex flex-col gap-[var(--otds-size-padding-medium)] text-left">
                <p className="type-subheadline-7">{item.title}</p>
                <p className="type-label">{item.description}</p>
              </div>
            </div>
          ))}
          {/* Tick connector — 12px tall band of 1px ticks every 40px */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[106px] h-[12px]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, var(--otds-black-100) 0 1px, transparent 1px 40px)",
            }}
          />
        </div>
      </div>
      {/* fade gradient on right */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[260px] bg-gradient-to-l from-[var(--otds-blue-500)] to-transparent"
      />
    </section>
  );
}

function RelatedEvents({ slugs }: { slugs: ReadonlyArray<string> }) {
  const related = slugs
    .map((s) => events[s])
    .filter(Boolean) as ReadonlyArray<EventData>;
  if (related.length === 0) return null;
  return (
    <section className="flex flex-col gap-[var(--otds-size-padding-large)] px-8 pt-16">
      <p className="type-subheadline-7 text-[var(--otds-white-100)]">
        Related events
      </p>
      <div className="grid gap-10 md:grid-cols-3">
        {related.map((e) => (
          <EventTile key={e.slug} event={e} />
        ))}
      </div>
    </section>
  );
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  // Build headline with a soft line break (split on first space)
  const headline = (() => {
    const idx = event.name.indexOf(" ");
    if (idx === -1) return event.name;
    const top = event.name.slice(0, idx);
    const rest = event.name.slice(idx + 1);
    return (
      <Fragment>
        {top}
        <br />
        {rest}
      </Fragment>
    );
  })();

  return (
    <>
      <EventPageHeader
        imageSrc={event.heroImageSrc}
        imageAlt={event.name}
        headline={headline}
      />
      <Introduction event={event} />
      <ImageGallery event={event} />
      <Schedule items={event.schedule} />
      <RelatedEvents slugs={event.relatedSlugs} />
    </>
  );
}
