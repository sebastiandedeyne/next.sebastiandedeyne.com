import Link from 'next/link';
import { color, fontSize } from '../../lib/style';

export default ({ breadcrumb }) => (
  <strong>
    <Link href="/" prefetch>
      <a>Sebastian De Deyne</a>
    </Link>
    {breadcrumb && (
      <span className="breadcrumb">
        <span>/</span>
        {breadcrumb}
      </span>
    )}
    <style jsx>{`
      strong {
        font-size: ${fontSize.sm};
        font-weight: bold;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      a {
        color: ${color.red};
      }

      .breadcrumb {
        color: ${color.gray};
        font-weight: normal;
      }

      .breadcrumb span {
        display: inline-block;
        margin: 0 0.75em;
      }
    `}</style>
  </strong>
);
