import type { Metadata, Viewport } from 'next';
import './styles/globals.css';

const BASE_URL = 'https://theomlounge.vn';

/* ─── SEO Metadata ──────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'The OM Lounge – Nail & Beauty Salon Cao Cấp tại TP.HCM',
    template: '%s | The OM Lounge',
  },
  description:
    'The OM Lounge là nail salon cao cấp tại TP.HCM, cung cấp dịch vụ manicure, pedicure, nail art và các gói combo thư giãn trong không gian sang trọng, thư thái.',
  keywords: [
    'nail salon', 'The OM Lounge', 'làm nail', 'manicure', 'pedicure',
    'nail art', 'sơn gel', 'nail cao cấp', 'TP HCM', 'Hồ Chí Minh',
    'spa nail', 'làm đẹp', 'thư giãn',
  ],
  authors: [{ name: 'The OM Lounge', url: BASE_URL }],
  creator: 'The OM Lounge',
  publisher: 'The OM Lounge',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: `${BASE_URL}/dich-vu`,
    siteName: 'The OM Lounge',
    title: 'The OM Lounge – Nail & Beauty Salon Cao Cấp',
    description: 'Trải nghiệm dịch vụ nail cao cấp trong không gian thư giãn sang trọng tại The OM Lounge TP.HCM.',
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'The OM Lounge Nail Salon',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@theomlounge',
    title: 'The OM Lounge – Nail & Beauty Salon Cao Cấp',
    description: 'Nail salon cao cấp tại TP.HCM. Đặt lịch ngay hôm nay!',
    images: [`${BASE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: `${BASE_URL}/dich-vu`,
    languages: {
      'vi': `${BASE_URL}/dich-vu`,
      'en': `${BASE_URL}/en/services`,
      'x-default': `${BASE_URL}/dich-vu`,
    },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  category: 'business',
  classification: 'Beauty & Personal Care',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f0e8' },
    { media: '(prefers-color-scheme: dark)', color: '#2c1f15' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap"
          as="style"
        />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Mobile web app meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="The OM Lounge" />

        {/* JSON-LD: BeautySalon Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BeautySalon',
              '@id': BASE_URL,
              name: 'The OM Lounge',
              description: 'Nail & Beauty Salon cao cấp tại TP.HCM',
              url: BASE_URL,
              telephone: '+84-969-886-969',
              email: 'hello@theomlounge.vn',
              logo: `${BASE_URL}/logo.png`,
              image: `${BASE_URL}/og-image.jpg`,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Đường ABC',
                addressLocality: 'Quận 1',
                addressRegion: 'TP. Hồ Chí Minh',
                postalCode: '700000',
                addressCountry: 'VN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '10.7769',
                longitude: '106.7009',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '09:00',
                  closes: '20:00',
                },
              ],
              priceRange: '$$',
              sameAs: [
                'https://www.facebook.com/theomlounge',
                'https://www.instagram.com/theomlounge',
                'https://www.tiktok.com/@theomlounge',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                bestRating: '5',
                worstRating: '1',
                ratingCount: '156',
              },
            }),
          }}
        />

        {/* JSON-LD: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'The OM Lounge',
              url: BASE_URL,
              telephone: '+84-969-886-969',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Đường ABC',
                addressLocality: 'Quận 1',
                addressRegion: 'TP. Hồ Chí Minh',
                addressCountry: 'VN',
              },
              image: `${BASE_URL}/og-image.jpg`,
              description: 'Nail & Beauty Salon cao cấp với dịch vụ manicure, pedicure, nail art chuyên nghiệp.',
              priceRange: '$$',
              openingHours: 'Mo-Su 09:00-20:00',
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}