import type { MetadataRoute } from "next";

const base =
  process.env.NODE_ENV === "production"
    ? "https://thecareden.com"
    : "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/fonts" }],
    sitemap: `${base}/sitemap.xml`,
  };
}
