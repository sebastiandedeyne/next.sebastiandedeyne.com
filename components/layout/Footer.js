import { baseline, color, containerWidth, fontSize } from '../../lib/style';

export default () => (
  <footer>
    <div className="inner">© 2018 Sebastian De Deyne</div>
    <style jsx>{`
      footer {
        color: ${color.gray};
        font-size: ${fontSize.sm};
      }

      .inner {
        margin: 0 auto;
        max-width: ${containerWidth};
        padding: 0 ${baseline(0.5)} ${baseline(0.5)};
      }
    `}</style>
  </footer>
);
