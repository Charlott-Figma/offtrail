import Link from "next/link";
import { cn } from "@/lib/cn";

type CommonProps = {
  className?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
};

type AsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type AsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

type SecondaryButtonProps = AsButton | AsLink;

const base = cn(
  "type-caption-1 text-center",
  "inline-flex h-[36px] items-center justify-center",
  "p-[var(--otds-size-padding-small)]",
  "rounded-[var(--otds-size-corner-small)] backdrop-blur-[20px]",
  "bg-[var(--otds-white-600)] text-[var(--otds-white-100)]",
  "hover:bg-[var(--otds-white-100)] hover:text-[var(--otds-black-100)]",
  "transition-colors",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--otds-white-100)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
  "disabled:pointer-events-none disabled:opacity-50",
);

export function SecondaryButton(props: SecondaryButtonProps) {
  const { className, fullWidth, children } = props;
  const classes = cn(base, fullWidth && "w-full", className);

  if ("href" in props && props.href !== undefined) {
    const { href, className: _c, fullWidth: _f, children: _ch, ...rest } = props;
    void _c; void _f; void _ch;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { className: _c, fullWidth: _f, children: _ch, ...rest } = props as AsButton;
  void _c; void _f; void _ch;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
