// Central place for site-wide SEO constants.
// IMPORTANT: set NEXT_PUBLIC_SITE_URL in your production environment
// (e.g. Vercel project settings) to your real domain, e.g.
// https://www.enorminternational.com — every metadata/sitemap/JSON-LD
// helper below reads from this single source of truth.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.enorminternational.com"
).replace(/\/$/, "");

export const SITE_NAME = "Enorm International";

export const SITE_TITLE = "Enorm International | Premium Indian Spice Exporters";

export const SITE_DESCRIPTION =
  "Enorm International is an India-based exporter of premium-quality Indian spices — sourcing, packaging, and shipping authentic spices to businesses across Asia, the Middle East, Europe, and Africa.";

export const SITE_KEYWORDS = [
  "Indian spice exporter",
  "spice export company India",
  "wholesale spices India",
  "cumin seed exporter",
  "turmeric powder exporter",
  "red chilli powder exporter",
  "spice supplier India",
  "Enorm International",
];

// Default social preview image. Replace with a real 1200x630 image in /public
// (e.g. /public/og-image.jpg) for the richest link previews.
export const SITE_OG_IMAGE = "/og-image.jpg";

export const SITE_LOCALE = "en_US";

export const TWITTER_HANDLE = "@enorm_intl";
