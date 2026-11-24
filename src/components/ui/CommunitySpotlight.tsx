import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

type CommunitySpotlightProps = {
  imageSrc: string;
  imageAlt?: string;
  name: string;
  title?: string;
  location: string;
  eventIndicator: string;
  className?: string;
};

export function CommunitySpotlight({
  imageSrc,
  imageAlt = "",
  name,
  title,
  location,
  eventIndicator,
  className,
}: CommunitySpotlightProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-[820/620] w-full flex-col justify-end overflow-hidden",
        "rounded-[6px] p-[6px]",
        className,
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(min-width: 1024px) 820px, 100vw"
        className="object-cover"
      />
      <div className="relative">
        <Card
          name={name}
          title={title}
          location={location}
          eventIndicator={eventIndicator}
        />
      </div>
    </div>
  );
}
