import Head from 'next/head';
import Link from 'next/link';
import {
  baseline,
  color,
  containerWidth,
  global,
  fontFamily,
  fontSize
} from '../lib/style';

export default ({ title, children }) => (
  <div className="container">
    <Head>
      <title>{title || ''}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/css/hljs.css" />
    </Head>

    <header className="header">
      <strong className="title">
        <Link href="/" prefetch>
          Sebastian De Deyne
        </Link>
      </strong>
      <nav className="nav">
        <ul>
          <li>
            <Link href="/" prefetch>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
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
        font-family: ${fontFamily.mono};
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-weight: bold;
      }

      .nav ul {
        display: flex;
        justify-content: flex-end;
      }

      .nav li {
        margin-left: ${baseline()};
      }
    `}</style>
  </div>
);
