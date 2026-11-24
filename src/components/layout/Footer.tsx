import { Fragment } from "react";
import Link from "next/link";
import { LogoWordmark } from "@/components/icons/LogoWordmark";
import { cn } from "@/lib/cn";

type FooterLink = { label: string; href: string };

type FooterProps = {
  copyright?: string;
  links?: ReadonlyArray<FooterLink>;
  rightText?: string;
  tagline?: string;
  className?: string;
};

const defaultLinks: ReadonlyArray<FooterLink> = [
  { label: "Explore", href: "/explore" },
  { label: "Hosts", href: "/hosts" },
  { label: "Resources", href: "/resources" },
  { label: "Map", href: "/map" },
];

export function Footer({
  copyright = "©2026 Offtrail",
  links = defaultLinks,
  rightText = "All rights reserved",
  tagline = "Out there together",
  className,
}: FooterProps) {
  return (
    <footer
      className={cn(
        "relative flex w-full flex-col items-center justify-end overflow-hidden",
        "bg-[var(--otds-black-100)] text-[var(--otds-blue-500)]",
        "gap-12 p-2 md:gap-[var(--otds-size-padding-large)]",
        "min-h-[460px] md:min-h-[360px] lg:min-h-[592px]",
        className,
      )}
    >
      {/* Decorative arc — a giant circle anchored above the content */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full",
          "border border-dotted border-[var(--otds-blue-500)]/40",
          "top-[50px] size-[960px]",
          "md:top-[80px] md:size-[1900px]",
          "lg:top-[110px] lg:size-[2700px]",
        )}
      />

      <LogoWordmark
        className={cn(
          "relative block h-6 w-[91.714px] text-[var(--otds-white-100)]",
          "md:h-10 md:w-[152.854px]",
          "lg:h-14 lg:w-[213.998px]",
        )}
      />

      <p
        className={cn(
          "relative w-full text-center uppercase font-normal leading-none",
          "text-[76px] md:text-[87px] lg:text-[156px]",
          "[text-box-edge:cap_alphabetic] [text-box-trim:trim-both]",
        )}
        style={{
          fontFamily: "var(--otds-font-family-headline)",
          fontVariationSettings: "var(--otds-workbench-overlapping)",
        }}
      >
        {tagline}
      </p>

      <div
        className={cn(
          "relative flex w-full items-center px-4",
          "flex-col gap-[var(--otds-size-padding-large)]",
          "md:flex-row md:justify-between md:gap-[var(--otds-size-padding-small)]",
        )}
      >
        <p className="type-label-caps text-center md:w-[206px] md:text-left">
          {copyright}
        </p>

        <nav
          aria-label="Footer"
          className="flex items-center gap-[var(--otds-size-padding-small)]"
        >
          {links.map((link, i) => (
            <Fragment key={link.href}>
              {i > 0 && (
                <span
                  aria-hidden
                  className="type-label-caps select-none opacity-70"
                >
                  +
                </span>
              )}
              <Link
                href={link.href}
                className="type-label-caps whitespace-nowrap underline underline-offset-2 transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            </Fragment>
          ))}
        </nav>

        <p className="type-label-caps text-center md:w-[206px] md:text-right">
          {rightText}
        </p>
      </div>
    </footer>
  );
}
