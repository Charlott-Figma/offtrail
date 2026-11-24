import Image from "next/image";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { cn } from "@/lib/cn";

type EventPageHeaderProps = {
  imageSrc: string;
  imageAlt?: string;
  headline: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
};

const defaultActions = (
  <>
    <SecondaryButton className="flex-1">Share</SecondaryButton>
    <SecondaryButton className="flex-1">Save</SecondaryButton>
  </>
);

export function EventPageHeader({
  imageSrc,
  imageAlt = "",
  headline,
  actions = defaultActions,
  className,
}: EventPageHeaderProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-[1440/640] w-full items-end justify-between overflow-hidden",
        "px-[var(--otds-size-padding-xlarge)] pb-[var(--otds-size-padding-xlarge)]",
        className,
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative flex w-fit shrink-0 flex-col items-start justify-end gap-[var(--otds-size-padding-large)]">
        <div
          aria-hidden
          className="h-[6px] w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, var(--otds-white-100) 0 1px, transparent 1px 40px)",
          }}
        />
        <h1 className="type-headline-1 text-[var(--otds-white-100)]">
          {headline}
        </h1>
      </div>

      <div className="relative flex w-[445px] max-w-full items-center gap-[var(--otds-size-padding-xxsmall)]">
        {actions}
      </div>
    </div>
  );
}
