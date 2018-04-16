import Link from 'next/link';
import { baseline, color, fontSize } from '../../lib/style';

const Footer = () => (
  <footer>
    <div className="wrapper with-links">
      <p>
        © 2018{' '}
        <Link href="/">
          <a>Sebastian De Deyne</a>
        </Link>
      </p>
      <p>
        <a href="https://twitter.com/sebdedeyne">@sebdedeyne</a>
        {' · '}
        <a href="/rss">RSS</a>
      </p>
    </div>
    <style jsx>{`
      footer {
        color: ${color.gray};
        font-size: ${fontSize.xs};
        padding-top: ${baseline(0.5)};
        padding-bottom: ${baseline(0.5)};
      }

      .wrapper {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </footer>
);

export default Footer;
