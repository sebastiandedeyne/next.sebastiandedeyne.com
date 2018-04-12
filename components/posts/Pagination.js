import Link from 'next/link';
import { color, fontSize } from '../../lib/style';

const createPageIterator = length =>
  Array.from({ length }).map((_, i) => i + 1);

export default ({ pages, page }) => (
  <ul>
    {createPageIterator(pages).map(p => (
      <li key={p} aria-selected={p == page ? 'true' : null}>
        <Link href={p == 1 ? '/posts' : `/posts?page=${p}`}>
          <a>{p}</a>
        </Link>
      </li>
    ))}
    <style jsx>{`
      ul {
        display: flex;
        color: ${color.gray};
        font-size: ${fontSize.sm};
      }

      li + li {
        margin-left: 0.5em;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2em;
        height: 2em;
        line-height: 1;
        border-radius: 2em;
      }

      [aria-selected] a {
        border: 1px solid ${color.gray};
      }
    `}</style>
  </ul>
);
