import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://theomlounge.vn', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://theomlounge.vn/dich-vu', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://theomlounge.vn/gioi-thieu', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://theomlounge.vn/tin-tuc', lastModified: new Date(), changeFrequency: 'daily', priority: 0.6 },
    { url: 'https://theomlounge.vn/lien-he', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ];
}