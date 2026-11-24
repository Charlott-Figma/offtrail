import { cn } from "@/lib/cn";

type DividerProps = {
  className?: string;
};

export function Divider({ className }: DividerProps) {
  return (
    <hr
      className={cn(
        "h-px w-full border-0 bg-[var(--otds-grey-500)]",
        className,
      )}
    />
  );
}
