import { baseline, color, fontFamily, fontSize } from '../lib/style';

export default ({ title, info = null, margin = null }) => (
  <header>
    <h1>{title}</h1>
    {info && <aside>{info}</aside>}

    <style jsx>{`
      header {
        font-family: ${fontFamily.sans};
        margin: ${margin || 0};
      }

      h1 {
        font-size: ${fontSize.xxl};
        line-height: 1.3;
        width: 80%;
      }

      aside {
        color: ${color.gray};
        font-size: ${fontSize.sm};
        margin-top: ${baseline(0.75)};
      }
    `}</style>
  </header>
);
