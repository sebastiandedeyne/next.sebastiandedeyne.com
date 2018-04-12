import Link from 'next/link';
import { baseline, color, fontSize } from '../../lib/style';

export default () => (
  <nav>
    <ul>
      <li>
        <Link href="/" prefetch>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </li>
      <li>
        <Link href="/talks">
          <a>Talks</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      nav {
        color: ${color.gray};
        font-size: ${fontSize.sm};
      }

      ul {
        display: flex;
        justify-content: flex-end;
      }

      li {
        margin-left: ${baseline(0.75)};
      }
    `}</style>
  </nav>
);
