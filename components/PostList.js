import Link from 'next/link';
import { format } from 'date-fns';
import { baseline, color, fontFamily, fontSize } from '../lib/style';

const PostLink = ({ slug, date, title }) => (
  <Link href={`/post?slug=${slug}`} as={`/posts/${slug}`}>
    <a>
      <strong>{title}</strong>
      <em>{format(date, 'MMMM Mo, YYYY')}</em>
      <style jsx>{`
        a {
          font-family: ${fontFamily.sans};
        }

        strong {
          display: block;
          font-size: ${fontSize.lg};
          line-height: 1.3;
        }

        em {
          font-size: ${fontSize.sm};
          color: ${color.gray};
        }
      `}</style>
    </a>
  </Link>
);

export default ({ posts }) => (
  <div>
    <h2>Latest posts</h2>
    <ul>
      {posts.map(post => (
        <li key={post.slug}>
          <PostLink {...post} />
        </li>
      ))}
    </ul>
    <style jsx>{`
      h2 {
        color: ${color.gray};
        font-family: ${fontFamily.sans};
        font-size: ${fontSize.sm};
        letter-spacing: 0.1em;
        margin-bottom: ${baseline()};
        text-transform: uppercase;
      }

      li + li {
        margin-top: ${baseline(0.5)};
      }
    `}</style>
  </div>
);
