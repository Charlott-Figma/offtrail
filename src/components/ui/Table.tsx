import { Fragment } from "react";
import { Divider } from "@/components/ui/Divider";
import { TableRow } from "@/components/ui/TableRow";
import { cn } from "@/lib/cn";

export type TableRowData = {
  eventName: string;
  date: string;
  name: string;
  location?: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
};

type TableLabels = {
  event: string;
  date: string;
  host: string;
  location: string;
};

const defaultLabels: TableLabels = {
  event: "Event",
  date: "Date",
  host: "Host",
  location: "Location",
};

type TableProps = {
  rows: ReadonlyArray<TableRowData>;
  labels?: Partial<TableLabels>;
  cta?: React.ReactNode;
  className?: string;
};

function HeaderLabels({ labels }: { labels: TableLabels }) {
  return (
    <div className="type-label flex w-full items-center gap-[var(--otds-size-padding-xsmall)] text-[var(--otds-black-100)]">
      <span className="min-w-0 grow-[498] basis-0">{labels.event}</span>
      <span className="min-w-0 grow-[330] basis-0">{labels.date}</span>
      <span className="min-w-0 grow-[344] basis-0">{labels.host}</span>
      <span className="min-w-0 grow-[180] basis-0 text-right">
        {labels.location}
      </span>
    </div>
  );
}

export function Table({ rows, labels, cta, className }: TableProps) {
  const mergedLabels = { ...defaultLabels, ...labels };

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-[var(--otds-size-padding-small)]",
        className,
      )}
    >
      <HeaderLabels labels={mergedLabels} />
      <Divider />

      {rows.map((row, i) => (
        <Fragment key={i}>
          <TableRow {...row} />
          <Divider />
        </Fragment>
      ))}

      {cta && (
        <div className="pt-[var(--otds-size-padding-small)]">{cta}</div>
      )}
    </div>
  );
}
