import Image from "next/image";
import { SearchUI } from "@/components/ui/SearchUI";
import { Table } from "@/components/ui/Table";
import { CommunitySpotlight } from "@/components/ui/CommunitySpotlight";
import { Badge } from "@/components/ui/Badge";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const upcomingRows = [
  {
    eventName: "High Desert Horseback Ride",
    date: "February 16, 2026",
    name: "Samantha Godfrey",
    location: "Mammoth Lakes, CA",
    imageSrc: "/images/event/Event-01.webp",
    imageAlt: "Horseback riders crossing high desert",
    href: "/events/high-desert-horseback-ride",
  },
  {
    eventName: "Afternoon Social Run: Open Pace",
    date: "February 17, 2026",
    name: "Justin Lee",
    location: "Bishop, CA",
    imageSrc: "/images/event/Event-02.webp",
    imageAlt: "Group on a casual afternoon run",
    href: "/events/afternoon-social-run",
  },
  {
    eventName: "Eastern Sierra Road Spin",
    date: "February 19, 2026",
    name: "Kaley Bennett",
    location: "Crowley Lake, CA",
    imageSrc: "/images/event/Event-03.webp",
    imageAlt: "Cyclist on Sierra road",
    href: "/events/eastern-sierra-road-spin",
  },
  {
    eventName: "Meadow Loop Sunrise Hike",
    date: "February 19, 2026",
    name: "Karim Nasser",
    location: "June Lake, CA",
    imageSrc: "/images/event/Event-04.webp",
    imageAlt: "Hikers on a meadow loop trail at sunrise",
    href: "/events/meadow-loop-sunrise-hike",
  },
  {
    eventName: "Sunset Paraglide Meetup",
    date: "February 21, 2026",
    name: "Annisah Patel",
    location: "Mono Lake, CA",
    imageSrc: "/images/event/Event-05.webp",
    imageAlt: "Paraglider against a sunset sky",
    href: "/events/sunset-paraglide-meetup",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col gap-2 p-2 md:flex-row">
        <div className="flex min-h-[480px] flex-col items-center justify-center gap-8 rounded-[6px] bg-[var(--color-bg)] px-2 pt-10 text-[var(--color-fg)] md:h-[820px] md:min-h-0 md:flex-1 md:gap-10 md:px-10 md:pt-0">
          <h1 className="type-headline-2 text-center md:type-headline-1">
            Out there
            <br />
            together
          </h1>
          <p className="type-subheadline-7 text-center md:type-subheadline-4">
            Discover outdoor events near you
          </p>
          <div className="flex w-full justify-center">
            <SearchUI />
          </div>
        </div>
        <div className="relative h-[240px] overflow-hidden rounded-[6px] md:h-[820px] md:flex-1">
          <Image
            src="/images/landing-hero.webp"
            alt="Outdoor adventurers on a trail"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Upcoming events */}
      <section className="px-2">
        <div className="rounded-[6px] bg-[var(--otds-white-100)] px-6 pb-6 pt-12 md:pt-16">
          <header className="mb-12 flex flex-col gap-4 text-[var(--otds-black-100)] md:mb-16">
            <p className="type-subheadline-7">This week, Offtrail</p>
            <h2 className="text-[var(--otds-size-font-5xlarge)] md:text-[var(--otds-size-font-9xlarge)] uppercase font-normal leading-none [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]" style={{ fontFamily: "var(--otds-font-family-headline)", fontVariationSettings: "var(--otds-workbench-overexposed)" }}>
              06/16-06/21
            </h2>
          </header>
          <div className="relative">
            <div className="overflow-x-auto md:overflow-visible">
              <div className="min-w-[700px] md:min-w-0">
                <Table
                  rows={upcomingRows}
                  cta={
                    <PrimaryButton fullWidth>Host your own event</PrimaryButton>
                  }
                />
              </div>
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-[60px] bg-gradient-to-l from-[var(--otds-white-100)] to-transparent md:hidden"
            />
          </div>
        </div>
      </section>

      {/* Local hosts — orange panel first on mobile, spotlights left on md+ via flex-row-reverse */}
      <section className="flex flex-col gap-2 p-2 md:flex-row-reverse md:items-stretch">
        <aside className="flex h-[240px] flex-col items-center justify-between gap-6 rounded-[6px] bg-[var(--otds-orange-400)] p-6 text-[var(--otds-black-100)] md:h-auto md:w-[589px] md:gap-0">
          <span aria-hidden className="hidden md:block md:h-[18px]" />
          <div className="flex flex-col items-center gap-6">
            <h2 className="type-headline-4 text-center md:type-headline-1">
              Local
              <br />
              Hosts
            </h2>
            <Badge>Bishop, CA</Badge>
          </div>
          <a
            href="/hosts"
            className="type-subheadline-7 underline underline-offset-2 transition-opacity hover:opacity-70"
          >
            Meet all hosts
          </a>
        </aside>
        <div className="flex flex-col gap-2 md:flex-1">
          <CommunitySpotlight
            imageSrc="/images/portraits/Portrait-02.webp"
            imageAlt="Karim Nasser"
            name="Karim Nasser"
            title="Super host"
            location="June Lake, CA"
            eventIndicator="146 events"
          />
          <CommunitySpotlight
            imageSrc="/images/portraits/Portrait-07.webp"
            imageAlt="Kaley Bennett"
            name="Kaley Bennett"
            title="New host"
            location="Crowley Lake, CA"
            eventIndicator="14 events"
          />
        </div>
      </section>

      {/* Big numbers */}
      <section className="relative flex h-[208px] items-center justify-center gap-[60px] overflow-hidden text-[var(--otds-white-100)] md:h-[800px] md:gap-[clamp(64px,12vw,246px)]">
        <Image
          src="/images/brand/Brand-03.webp"
          alt=""
          fill
          aria-hidden
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-[var(--otds-black-100)]/30"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 size-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dotted border-[var(--otds-white-100)]/30 md:size-[740px]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 size-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dotted border-[var(--otds-white-100)]/25 md:size-[520px]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 size-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dotted border-[var(--otds-white-100)]/20 md:size-[340px]"
        />
        <div className="relative w-[122px] text-left text-[32px] uppercase font-normal leading-none [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] md:w-[470px] md:text-[100px]" style={{ fontFamily: "var(--otds-font-family-headline)", fontVariationSettings: "var(--otds-workbench-close)" }}>
          <p>580K+</p>
          <p>members</p>
        </div>
        <div className="relative w-[122px] text-left text-[32px] uppercase font-normal leading-none [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] md:w-[470px] md:text-[100px]" style={{ fontFamily: "var(--otds-font-family-headline)", fontVariationSettings: "var(--otds-workbench-close)" }}>
          <p>1M+</p>
          <p>meetups</p>
        </div>
      </section>

      {/* Offtrail story */}
      <section className="flex flex-col gap-2 p-2 md:flex-row md:items-stretch">
        <div className="flex flex-col gap-16 rounded-[6px] bg-[var(--otds-white-100)] px-6 pb-6 pt-12 text-[var(--otds-black-100)] md:flex-1 md:justify-between md:gap-40 md:pt-16">
          <h3 className="type-subheadline-5 md:type-subheadline-3">
            The Offtrail Story
          </h3>
          <div className="type-subheadline-4 max-w-[684px] space-y-6 md:type-subheadline-2">
            <p>
              Offtrail started as a small trail run with friends who wanted an
              excuse to get outside. It grew because others were looking for the
              same thing: connection without pressure.
            </p>
            <p>
              Today, Offtrail helps people discover outdoor meetups hosted by
              locals — from climbing to yoga, from surf sessions to sunrise
              hikes.
            </p>
            <p>Not a highlight reel. A real moment.</p>
          </div>
          <PrimaryButton fullWidth>Join Offtrail</PrimaryButton>
        </div>
        <div className="flex flex-col gap-2 md:w-[469px]">
          <div className="relative h-[267px] overflow-hidden rounded-[6px] md:h-auto md:flex-1">
            <Image
              src="/images/brand/Brand-05.webp"
              alt=""
              fill
              sizes="(min-width: 768px) 469px, 100vw"
              className="object-cover object-bottom"
            />
          </div>
          <div className="relative h-[267px] overflow-hidden rounded-[6px] md:h-auto md:flex-1">
            <Image
              src="/images/brand/Brand-08.webp"
              alt=""
              fill
              sizes="(min-width: 768px) 469px, 100vw"
              className="object-cover object-bottom"
            />
          </div>
        </div>
      </section>
    </>
  );
}
