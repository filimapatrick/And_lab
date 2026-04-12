import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  robots?: string;
  includeOrganizationSchema?: boolean;
};

const SITE_NAME = 'African NeuroData Research Lab (ANR)';
const SITE_URL = 'https://africanneurodataresearch.org';

export default function SEO({
  title,
  description,
  path,
  image = '/assets/logo.jpeg',
  type = 'website',
  robots = 'index,follow',
  includeOrganizationSchema = false,
}: SEOProps) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const canonical = `${SITE_URL}${normalizedPath}`;
  const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo.jpeg`,
    email: 'anrlab.ng@gmail.com',
    sameAs: [SITE_URL],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
      addressLocality: 'Port Harcourt',
    },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {includeOrganizationSchema ? (
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      ) : null}
    </Helmet>
  );
}
