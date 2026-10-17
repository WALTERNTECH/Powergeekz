import type { APIRoute } from "astro";
import { company } from "../data/site";

const pages = ["/", "/services.html", "/portfolio.html", "/documentaries.html", "/about.html", "/contact.html"];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map((p) => `  <url><loc>${new URL(p, company.url).href}</loc><lastmod>${today}</lastmod></url>`)
    .join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml" } },
  );
};
