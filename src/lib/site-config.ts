export const siteConfig = {
  name: "Offtrail",
  tagline: "Built for the path less traveled.",
  description:
    "Offtrail helps you plan, navigate, and capture adventures beyond the marked trail.",
  url: "https://offtrail.com",
  ogImage: "/og.png",
  primaryNav: [
    { label: "Explore", href: "/explore" },
    { label: "Hosts", href: "/hosts" },
    { label: "Map", href: "/map" },
  ],
  social: {
    twitter: "https://twitter.com/offtrail",
    github: "https://github.com/offtrail",
  },
} as const;

export type SiteConfig = typeof siteConfig;
