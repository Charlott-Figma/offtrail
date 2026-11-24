import { SearchIcon } from "@/components/icons/SearchIcon";
import { cn } from "@/lib/cn";

export type SearchField = {
  label: string;
  placeholder: string;
  value?: string;
  onClick?: () => void;
};

type SearchUIProps = {
  fields?: ReadonlyArray<SearchField>;
  onSubmit?: () => void;
  searchLabel?: string;
  compactPlaceholder?: string;
  className?: string;
};

const defaultFields: ReadonlyArray<SearchField> = [
  { label: "Where", placeholder: "Search locations" },
  { label: "What", placeholder: "Search activities" },
  { label: "When", placeholder: "Search dates" },
];

function FieldButton({ field }: { field: SearchField }) {
  return (
    <button
      type="button"
      onClick={field.onClick}
      className="flex h-[29px] w-[130px] flex-col items-start gap-[10px] rounded-[var(--otds-size-corner-small)] text-left text-[var(--otds-blue-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--otds-blue-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--otds-blue-200)]"
    >
      <span className="type-caption-2 w-full">{field.label}</span>
      <span
        className={cn(
          "type-body-2 w-full truncate",
          !field.value && "opacity-50",
        )}
      >
        {field.value ?? field.placeholder}
      </span>
    </button>
  );
}

function Divider() {
  return (
    <span
      aria-hidden
      className="h-[40px] w-px shrink-0 bg-[var(--otds-blue-500)]"
    />
  );
}

export function SearchUI({
  fields = defaultFields,
  onSubmit,
  searchLabel = "Search",
  compactPlaceholder = "Start your search",
  className,
}: SearchUIProps) {
  const sharedSurface = cn(
    "rounded-[var(--otds-size-corner-full)]",
    "border-[0.7px] border-solid border-[var(--otds-blue-500)]",
    "bg-[var(--otds-blue-200)]",
    "text-[var(--otds-blue-500)]",
  );

  return (
    <>
      {/* Mobile compact — single placeholder pill */}
      <button
        type="button"
        onClick={onSubmit}
        aria-label={searchLabel}
        className={cn(
          sharedSurface,
          "inline-flex h-[48px] w-[280px] items-center justify-between",
          "px-[var(--otds-size-padding-medium)] py-[var(--otds-size-padding-xsmall)]",
          "md:hidden",
          className,
        )}
      >
        <span className="type-body-1 opacity-70">{compactPlaceholder}</span>
        <SearchIcon className="size-[16px] shrink-0" />
      </button>

      {/* Desktop full — three fields + circular submit */}
      <div
        role="search"
        className={cn(
          sharedSurface,
          "hidden items-center gap-[var(--otds-size-padding-medium)]",
          "pl-[var(--otds-size-padding-large)] pr-[var(--otds-size-padding-xsmall)] py-[var(--otds-size-padding-xsmall)]",
          "md:inline-flex",
          className,
        )}
      >
        {fields.map((field, i) => (
          <span key={`${field.label}-${i}`} className="flex items-center gap-[var(--otds-size-padding-medium)]">
            {i > 0 && <Divider />}
            <FieldButton field={field} />
          </span>
        ))}

        <button
          type="button"
          onClick={onSubmit}
          aria-label={searchLabel}
          className="inline-flex size-[48px] shrink-0 items-center justify-center rounded-[var(--otds-size-corner-full)] bg-[var(--otds-blue-500)] text-[var(--otds-blue-100)] transition-colors hover:bg-[var(--otds-blue-600)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--otds-white-100)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--otds-blue-200)]"
        >
          <SearchIcon className="size-[16px]" />
        </button>
      </div>
    </>
  );
}
