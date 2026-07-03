import { siteConfig } from '../lib/siteConfig';

export default function sitemap() {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteConfig.siteUrl}/services`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteConfig.siteUrl}/about`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteConfig.siteUrl}/gallery`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteConfig.siteUrl}/reviews`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteConfig.siteUrl}/faq`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteConfig.siteUrl}/blog`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteConfig.siteUrl}/contact`,
      lastModified: new Date().toISOString(),
    },
  ];
}
