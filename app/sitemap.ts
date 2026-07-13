import type { MetadataRoute } from "next";

const base =
  process.env.NODE_ENV === "production"
    ? "https://thecareden.com"
    : "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/join", "/partners", "/guidelines", "/contact", "/legal"];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
