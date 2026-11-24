import { cn } from "@/lib/cn";

type CardProps = {
  name: string;
  title?: string;
  location: string;
  eventIndicator: string;
  className?: string;
};

export function Card({
  name,
  title,
  location,
  eventIndicator,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "flex h-[64px] w-full items-baseline gap-[var(--otds-size-padding-xsmall)]",
        "rounded-[6px] bg-[var(--otds-black-100)] p-[16px]",
        "text-[var(--otds-white-100)]",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col items-baseline gap-[var(--otds-size-padding-xsmall)] md:flex-none md:grow-[231] md:basis-0">
        <p className="type-body-1">{name}</p>
        {title && (
          <p className="type-body-1 text-[var(--otds-orange-400)]">{title}</p>
        )}
      </div>
      <p className="type-body-1 hidden min-w-0 md:block md:grow-[338] md:basis-0">
        {location}
      </p>
      <p className="type-body-1 shrink-0 whitespace-nowrap text-right md:min-w-0 md:grow-[230] md:basis-0">
        {eventIndicator}
      </p>
    </div>
  );
}
