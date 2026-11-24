import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  showIndicator?: boolean;
  className?: string;
};

export function Badge({
  children,
  showIndicator = true,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[6px] whitespace-nowrap",
        "p-[var(--otds-size-padding-xsmall)]",
        "rounded-[var(--otds-size-corner-small)]",
        "border-[0.7px] border-solid border-[var(--otds-black-100)]",
        "type-label-caps text-[var(--otds-black-100)]",
        className,
      )}
    >
      {showIndicator && (
        <span
          aria-hidden
          className="size-[6px] shrink-0 rounded-full bg-[var(--otds-blue-500)]"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
