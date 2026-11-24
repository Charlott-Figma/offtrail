import Link from "next/link";
import { LogoWordmark } from "@/components/icons/LogoWordmark";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";

type NavVariant = "opaque" | "translucent";

type NavLink = { label: string; href: string };

type NavProps = {
  variant?: NavVariant;
  links?: ReadonlyArray<NavLink>;
  avatar?: React.ReactNode;
  className?: string;
};

const variantStyles: Record<
  NavVariant,
  { surface: string; fg: string }
> = {
  opaque: {
    surface: "bg-[var(--otds-grey-600)]",
    fg: "text-[var(--otds-black-100)]",
  },
  translucent: {
    surface: "bg-[var(--otds-nav-translucent-bg)]",
    fg: "text-[var(--otds-nav-translucent-fg)]",
  },
};

export function Nav({
  variant = "opaque",
  links = siteConfig.primaryNav,
  avatar,
  className,
}: NavProps) {
  const { surface, fg } = variantStyles[variant];

  return (
    <div
      className={cn(
        "flex h-[44px] w-full items-center justify-between",
        "rounded-[var(--otds-size-corner-small)] backdrop-blur-[20px]",
        "px-[var(--otds-size-padding-small)]",
        surface,
        fg,
        className,
      )}
    >
      <Link
        href="/"
        aria-label={`${siteConfig.name} — home`}
        className="inline-flex items-center"
      >
        <LogoWordmark className="block h-[14px] w-[53.5px] shrink-0 md:h-[16px] md:w-[61.142px]" />
      </Link>

      <div
        className={cn(
          "flex items-center",
          "gap-[var(--otds-size-padding-xsmall)] md:gap-[var(--otds-size-padding-medium)]",
        )}
      >
        <nav
          aria-label="Primary"
          className="hidden items-center gap-[var(--otds-size-padding-medium)] md:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="type-caption-1 whitespace-nowrap transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-[24px] w-[24px] items-center justify-center md:hidden"
        >
          <MenuIcon className="h-[9px] w-[20px]" />
        </button>

        {avatar ? (
          <div className="size-[24px] overflow-hidden rounded-[var(--otds-size-corner-full)]">
            {avatar}
          </div>
        ) : null}
      </div>
    </div>
  );
}
