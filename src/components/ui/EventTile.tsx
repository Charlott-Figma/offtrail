import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { EventData } from "@/lib/events";

type EventTileProps = {
  event: Pick<
    EventData,
    "slug" | "name" | "city" | "timeRange" | "spotsShort" | "dayLabel" | "dayNumber" | "heroImageSrc"
  > & { imageAlt?: string };
  className?: string;
};

export function EventTile({ event, className }: EventTileProps) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className={cn(
        "group flex flex-col gap-[var(--otds-size-padding-medium)] overflow-clip",
        "transition-opacity hover:opacity-90",
        className,
      )}
    >
      <div className="relative aspect-[432/254] w-full overflow-hidden rounded-[6px] bg-[var(--otds-grey-500)]">
        <Image
          src={event.heroImageSrc}
          alt={event.imageAlt ?? event.name}
          fill
          sizes="(min-width: 768px) 432px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex w-full items-start gap-6">
        <div className="flex min-w-0 flex-1 flex-col gap-[var(--otds-size-padding-medium)]">
          <div className="flex flex-col gap-[10px] text-[var(--otds-white-100)]">
            <p className="type-subheadline-7">{event.name}</p>
            <p className="type-subheadline-8">{event.city}</p>
          </div>
          <div className="type-caption-1 flex items-center gap-[var(--otds-size-padding-small)] text-[var(--otds-white-100)]">
            <span className="whitespace-nowrap">{event.timeRange}</span>
            <span aria-hidden className="opacity-70 select-none">
              +
            </span>
            <span className="whitespace-nowrap">{event.spotsShort}</span>
          </div>
        </div>

        <div className="flex w-[55px] flex-col items-center justify-center gap-[6px] self-stretch rounded-[8px] border-[0.7px] border-solid border-[var(--otds-blue-500)] bg-[var(--otds-blue-200)] p-[var(--otds-size-padding-xsmall)] text-center uppercase text-[var(--otds-blue-500)]">
          <p className="type-caption-1">{event.dayLabel}</p>
          <p
            className="text-[24px] leading-none [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]"
            style={{
              fontFamily: "var(--otds-font-family-headline)",
              fontVariationSettings: "var(--otds-workbench-close)",
            }}
          >
            {event.dayNumber}
          </p>
        </div>
      </div>
    </Link>
  );
}
