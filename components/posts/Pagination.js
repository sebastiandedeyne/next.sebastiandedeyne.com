import Link from 'next/link';
import { color, fontSize } from '../../lib/style';

const createPageIterator = length =>
  Array.from({ length }).map((_, i) => i + 1);

const Pagination = ({ pages, page }) => (
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
        font-size: ${fontSize.xs};
        color: ${color.gray};
      }

      li + li {
        margin-left: 1em;
      }

      [aria-selected] a {
        color: ${color.black};
      }
    `}</style>
  </ul>
);

export default Pagination;
