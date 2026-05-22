import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://m2mdfw.com';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = 'Made 2 Move Sports Medicine & Physical Therapy';

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  schemaMarkup = null,
}) => {
  const resolvedCanonical = canonical ? canonical : BASE_URL + '/';
  const resolvedTitle = title ? `${title} | Made 2 Move DFW` : SITE_NAME;

  return (
    <Helmet>
      {/* Standard */}
      <title>{resolvedTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={resolvedCanonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@m2mdfw" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Page-level structured data */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
