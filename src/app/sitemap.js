import { SITE_URL } from "@/lib/site";

// Generates /sitemap.xml automatically at build/request time.
// Add new top-level routes here as the site grows.
export default function sitemap() {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/clientele", priority: 0.6, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.5, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
