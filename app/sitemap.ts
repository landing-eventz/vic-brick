import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vic-brick.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/com-vendre-pis-vic-rapid`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/preu-pis-vic-2026`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/vendre-pis-vic-2026`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pisos-venda-vic`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/valoracio-pis-vic`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/immobiliaria-manlleu`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/politica-privacitat`,
      lastModified: new Date(),
    },
  ];
}
