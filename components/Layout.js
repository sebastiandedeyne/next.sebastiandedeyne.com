import Head from 'next/head';
import Nav from './layout/Nav';
import Title from './layout/Title';
import Footer from './layout/Footer';
import { baseline, containerWidth, global } from '../lib/style';

export default ({ title, children, breadcrumb = title }) => (
  <div>
    <Head>
      <title>
        {title ? `${title} — Sebastian De Deyne` : 'Sebastian De Deyne'}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/css/hljs.css" />
    </Head>

    <div className="wrapper">
      <div className="content">
        <header>
          <Title breadcrumb={breadcrumb} />
          <Nav />
        </header>
        <main>{children}</main>
      </div>
      <Footer />
    </div>

    <style jsx global>
      {global}
    </style>
    <style jsx>{`
      .wrapper {
        align-items: stretch;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .content {
        flex: 1;
      }

      header,
      main {
        margin: 0 auto;
        max-width: ${containerWidth};
        padding: 0 ${baseline(0.5)};
      }

      header {
        display: flex;
        justify-content: space-between;
        padding-top: ${baseline(0.5)};
        margin-bottom: ${baseline(3)};
      }

      main {
        margin-bottom: ${baseline(4)};
      }
    `}</style>
  </div>
);
