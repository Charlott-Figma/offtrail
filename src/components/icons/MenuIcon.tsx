import type { SVGProps } from "react";

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M20 9H0V8H20V9ZM20 5H0V4H20V5ZM20 1H0V0H20V1Z"
        fill="currentColor"
      />
    </svg>
  );
}
