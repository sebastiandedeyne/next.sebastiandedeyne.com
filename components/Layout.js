import Head from 'next/head';
import Link from 'next/link';
import { baseline, containerWidth, global } from '../lib/style';

export default ({ title, children }) => (
  <div className="container">
    <Head>
      <title>{title || ''}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/css/hljs.css" />
    </Head>

    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
    {children}

    <style jsx global>
      {global}
    </style>

    <style jsx>{`
      .container {
        max-width: ${containerWidth};
        padding: ${baseline(0.5)};
        margin: 0 auto;
      }
    `}</style>
  </div>
);
