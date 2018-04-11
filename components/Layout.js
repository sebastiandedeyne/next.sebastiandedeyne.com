import Head from 'next/head';
import { global } from '../lib/style';

export default ({ title, children }) => (
  <div className="container">
    <Head>
      <title>{title || ''}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/css/reset.css" />
      <link rel="stylesheet" href="/static/css/hljs.css" />
    </Head>
    {children}
    <style jsx global>
      {global}
    </style>
    <style jsx>{`
      .container {
        max-width: 600px;
        margin: 0 auto;
      }
    `}</style>
  </div>
);
