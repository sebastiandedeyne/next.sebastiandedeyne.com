import Head from 'next/head';
import Link from 'next/link';
import MainNav from '../components/MainNav';
import {
  baseline,
  color,
  containerWidth,
  global,
  fontFamily,
  fontSize
} from '../lib/style';

export default ({ title, children, breadcrumb = title }) => (
  <div className="container">
    <Head>
      <title>
        {title ? `${title} — Sebastian De Deyne` : 'Sebastian De Deyne'}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/css/hljs.css" />
    </Head>

    <header className="header">
      <strong className="title">
        <Link href="/" prefetch>
          Sebastian De Deyne
        </Link>
        {breadcrumb && (
          <span className="title-breadcrumb">
            <span className="title-breadcrumb-separator">/</span>
            {breadcrumb}
          </span>
        )}
      </strong>
      <MainNav />
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

      .header {
        color: ${color.gray};
        display: flex;
        justify-content: space-between;
        font-family: ${fontFamily.sans};
        font-size: ${fontSize.sm};
        margin-bottom: ${baseline(3)};
      }

      .title {
        color: ${color.red};
        font-weight: bold;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .title-breadcrumb {
        color: ${color.gray};
        font-weight: normal;
      }

      .title-breadcrumb-separator {
        display: inline-block;
        margin: 0 0.75em;
      }
    `}</style>
  </div>
);
