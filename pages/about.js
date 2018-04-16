import Layout from '../components/Layout';
import { baseline, color, fontFamily, fontSize } from '../lib/style';

export default () => (
  <Layout title="About" section="/about">
    <section>
      <aside className="sidebar">
        <div
          className="pic"
          style={{
            width: '100%',
            paddingBottom: '130%',
            backgroundColor: 'whitesmoke'
          }}
        />
        <div className="links with-links">
          <p>
            <span>Twitter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a href="https://twitter.com/sebdedeyne" title="Twitter">
              @sebdedeyne
            </a>
            <br />
            <span>GitHub&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a href="https://github.com/sebdedeyne" title="GitHub">
              sebastiandedeyne
            </a>
          </p>
          <p>
            <a href="mailto:sebastiandedeyne@gmail.com" title="E-mail">
              sebastiandedeyne@gmail.com
            </a>
          </p>
        </div>
      </aside>
      <article className="with-links">
        <h1 className="caps">About</h1>
        <p>
          I'm a web designer & developer from Ghent, working at{' '}
          <a href="https://spatie.be">Spatie</a>, Antwerp.
        </p>
        <p>
          I build websites, apps & other things with JavaScript, PHP, and CSS.
        </p>
        <p>
          I enjoy learning other frameworks, libraries and languages. Even if I
          don't plan on using something in the near future, research and
          experimentation with a foreign concept can serve as a great
          inspiration to solve problems in my familiar tech stack.
        </p>
        <p>
          I'm also a big open source proponent. Even if something isn't meant to
          be consumed by others, sharing code and knowledge is beneficial to all
          involved.
        </p>
        <h2 className="caps">Colophon</h2>
        <p>
          This website is powered by{' '}
          <a href="https://github.com/zeit/next.js">Next.js</a> and served from{' '}
          <a href="https://digitalocean.com">Digital Ocean</a>. The source code
          is hosted on <a href="https://github.com">GitHub</a>.
        </p>
      </article>
    </section>
    <style jsx>{`
      section {
        display: flex;
      }

      aside {
        color: ${color.gray};
        font-size: ${fontSize.xs};
        font-family: ${fontFamily.mono};
        line-height: 2;
        padding-right: ${baseline()};
      }

      .pic {
        margin-bottom: ${baseline(1.5)};
      }

      .links p {
        margin-bottom: 1em;
      }

      article {
        flex: 1;
        font-size: ${fontSize.sm};
        line-height: 1.8;
        padding-left: ${baseline()};
      }

      article h1,
      article h2 {
        margin-bottom: ${baseline(0.25)};
      }

      article p {
        margin-bottom: 1.8em;
      }
    `}</style>
  </Layout>
);
