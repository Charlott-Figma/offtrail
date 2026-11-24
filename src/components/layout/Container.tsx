import { cn } from "@/lib/cn";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: keyof React.JSX.IntrinsicElements;
  width?: "narrow" | "default" | "wide";
};

const widthClass = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Container({
  as: Tag = "div",
  width = "default",
  className,
  children,
  ...rest
}: ContainerProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={cn("mx-auto w-full px-6 sm:px-8", widthClass[width], className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
