import Head from 'next/head';
import Link from 'next/link';
import TopBar from './layout/TopBar';
import Footer from './layout/Footer';
import { baseline, global } from '../lib/style';

const Layout = ({ children, section, title }) => (
  <div>
    <Head>
      <title>
        {title ? `${title} — Sebastian De Deyne` : 'Sebastian De Deyne'}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/css/hljs.css" />
    </Head>

    <TopBar section={section} title={title} />
    <div className="holy-grail">
      <main className="wrapper">{children}</main>
      <Footer />
    </div>

    <style jsx global>
      {global}
    </style>
    <style jsx>{`
      .holy-grail {
        align-items: stretch;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      main {
        flex-grow: 1;
        margin: ${baseline(5)} auto ${baseline(3)};
      }
    `}</style>
  </div>
);

export default Layout;
