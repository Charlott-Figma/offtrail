import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

type TableRowProps = {
  imageSrc?: string;
  imageAlt?: string;
  eventName: string;
  date: string;
  name: string;
  location?: string;
  href?: string;
  className?: string;
};

export function TableRow({
  imageSrc,
  imageAlt = "",
  eventName,
  date,
  name,
  location,
  href,
  className,
}: TableRowProps) {
  const baseClasses = cn(
    "flex w-full items-center gap-[8px] text-[var(--otds-black-100)]",
    href && "transition-opacity hover:opacity-70",
    className,
  );

  const content = (
    <>
      <div className="flex min-w-0 grow-[498] basis-0 items-center gap-[12px]">
        <div className="relative h-[40px] w-[60px] shrink-0 overflow-hidden bg-[var(--otds-grey-500)] md:h-[80px] md:w-[120px]">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 768px) 120px, 60px"
              className="object-cover"
            />
          )}
        </div>
        <p className="type-body-1 min-w-0 flex-1">{eventName}</p>
      </div>

      <p className="type-body-1 min-w-0 grow-[330] basis-0">{date}</p>

      <p className="type-body-1 min-w-0 grow-[344] basis-0">{name}</p>

      <div className="flex min-w-0 grow-[180] basis-0 items-center justify-end">
        {location && <Badge>{location}</Badge>}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return <div className={baseClasses}>{content}</div>;
}
