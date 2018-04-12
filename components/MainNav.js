import Link from 'next/link';
import { baseline } from '../lib/style';

export default () => (
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
    <style jsx>{`
      ul {
        display: flex;
        justify-content: flex-end;
      }

      li {
        margin-left: ${baseline()};
      }
    `}</style>
  </nav>
);
