import Head from 'next/head';
import React, { forwardRef, ReactNode, FC } from 'react';

type PropsPage = {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
  description?: string;
  image?: string;
  url?: string;
};

const Page: FC<PropsPage> = forwardRef<HTMLDivElement, PropsPage>(({ children, meta, title, description, image, url, ...other }, ref) => (
  <>
    <Head>
      <title>{title ? `${title} | Rent-House®` : 'Rent-House®'}</title>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title ? `${title} | Rent-House®` : 'Rent-House®'} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | Rent-House®` : 'Rent-House®'} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />

      {/* Additional meta tags */}
      {meta}
    </Head>

    <div ref={ref} {...other} className="w-full">
      {children}
    </div>
  </>
));

Page.displayName = 'Page';

export default Page;
