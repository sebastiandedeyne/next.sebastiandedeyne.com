import Link from 'next/link';
import { format } from 'date-fns';
import Pagination from './Pagination';
import { baseline, color, fontSize } from '../../lib/style';

const PostLink = ({ slug, date, title }) => (
  <Link href={`/post?slug=${slug}`} as={`/posts/${slug}`}>
    <a>
      <strong>{title}</strong>
      <em>{format(date, 'MMMM Do, YYYY')}</em>
      <style jsx>{`
        strong {
          display: block;
          font-size: ${fontSize.lg};
          line-height: 1.3;
        }

        em {
          font-size: ${fontSize.xs};
          color: ${color.gray};
        }
      `}</style>
    </a>
  </Link>
);

const PostList = ({ posts, title, pagination }) => (
  <section>
    {title && <h1 className="caps">{title}</h1>}
    <ul>
      {posts.map(post => (
        <li key={post.slug}>
          <PostLink {...post} />
        </li>
      ))}
    </ul>
    {pagination && (
      <nav>
        <Pagination {...pagination} />
      </nav>
    )}
    <style jsx>{`
      h1 {
        margin-bottom: ${baseline()};
      }

      ul li + li {
        margin-top: ${baseline(0.5)};
      }

      nav {
        margin-top: ${baseline(1.5)};
      }
    `}</style>
  </section>
);

export default PostList;
