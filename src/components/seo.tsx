import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import icon from '../images/favicon.ico';

export const SEO = ({ title, description, image, pathname, children }) => {
  const metadata = useSiteMetadata();
  const { title: defaultTitle, description: defaultDescription } = metadata;
  const siteUrl = 'https://bennetsilverman.com';
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || metadata._rawLogo.asset.url,
    url: `${siteUrl}${pathname || ``}`,
    // twitterUsername,
  };

  return (
    <>
      <title>
        {seo.title == defaultTitle
          ? defaultTitle
          : seo.title + ' | ' + defaultTitle}
      </title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      <meta name="theme-color" content="#15613b" />
      <link rel="icon" type="image/x-icon" href={icon} />
      {children}
    </>
  );
};
