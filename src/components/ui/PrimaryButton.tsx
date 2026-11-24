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

type PrimaryButtonProps = AsButton | AsLink;

const base = cn(
  "type-subheadline-7 text-center text-[var(--otds-black-100)]",
  "inline-flex items-center justify-center",
  "px-[var(--otds-size-padding-small)] py-[var(--otds-size-padding-medium)]",
  "rounded-[var(--otds-size-corner-small)] backdrop-blur-[20px]",
  "bg-[var(--otds-grey-500)] hover:bg-[var(--otds-orange-500)]",
  "transition-colors",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--otds-orange-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
  "disabled:pointer-events-none disabled:opacity-50",
);

export function PrimaryButton(props: PrimaryButtonProps) {
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
