export default async function sitemap() {
  const baseUrl = "/";

  return [
    {
      url: `${baseUrl}`,
      changefreq: "daily",
      priority: 1.0,
      lastModified: new Date(),
    },
    {
      url: `/${baseUrl}/nosotros`,
      changefreq: "daily",
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contacto`,
      changefreq: "daily",
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/emprendedores`,
      changefreq: "daily",
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/servicios`,
      changefreq: "daily",
      priority: 0.9,
      lastModified: new Date(),
    },
  ];
}
