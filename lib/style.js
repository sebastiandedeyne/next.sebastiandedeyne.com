import css from 'styled-jsx/css';

export const color = {
  black: '#222',
  red: '#df6d6d',
  darkGray: '#441a1a',
  gray: '#a5a5a5',
  lightGray: '#e8e8e8',
  lighterGray: '#f9f9f9'
};

export const fontFamily = {
  sans: '"IBM Plex Sans"',
  serif: '"IBM Plex Serif"',
  mono: '"IBM Plex Mono"'
};

export const fontSize = {
  sm: '14px',
  default: '20px',
  lg: '21px',
  xl: '28px',
  xxl: '52px'
};

export const baseline = (factor = 1) => `${36 * factor}px`;
export const containerWidth = '750px';

export const global = css`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  body {
    color: ${color.darkGray};
    font-family: ${fontFamily.sans};
    font-size: ${fontSize.default};
    line-height: ${baseline()};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  .markup {
    font-family: ${fontFamily.serif};
  }

  .markup a {
    color: ${color.red};
    border-bottom: 1px solid ${color.red};
    text-decoration: none;
  }

  .markup h2 {
    color: ${color.black};
    font-family: ${fontFamily.sans};
    font-size: ${fontSize.xl};
    font-weight: bold;
    margin: ${baseline(2)} 0 ${baseline()};
  }

  .markup h3 {
    font-weight: bold;
    font-size: ${fontSize.lg};
    margin: ${baseline(1.5)} 0 ${baseline(0.5)};
  }

  .markup p {
    margin-bottom: ${baseline()};
  }

  .markup strong {
    font-weight: bold;
  }

  .markup em {
    font-style: italic;
  }

  .markup ul {
    margin-bottom: ${baseline()};
    list-style: disc;
    list-style-position: inside;
  }

  .markup ol {
    list-style-type: decimal;
    list-style-position: inside;
  }

  .markup code {
    font-size: 0.9em;
    font-family: ${fontFamily.mono};
    font-style: normal !important;
    border: 1px solid ${color.lightGray};
    background: ${color.lighterGray};
    padding: 0 0.2em;
  }

  .markup pre {
    margin: ${baseline(1.5)} 0;
  }

  .markup pre + pre {
    margin-top: -${baseline()};
  }

  .markup pre code {
    border: none;
    display: block;
    font-size: 0.8em;
    line-height: 1.6;
    padding: ${baseline()};
  }

  .markup blockquote {
    position: relative;
    padding-left: ${baseline(1.5)};
    padding-right: ${baseline()};
    margin-bottom: ${baseline()};
  }

  .markup blockquote:before {
    content: '“';
    position: absolute;
    left: 0;
    top: 16px;
    z-index: 1;
    font-weight: bold;
    font-size: 80px;
    color: ${color.lightGray};
  }

  .markup blockquote * {
    position: relative;
    z-index: 2;
    font-style: italic;
    line-height: 1.6;
  }

  .markup img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }

  .markup hr {
    margin: ${baseline(2)} 0;
    border: none;
    border-bottom: 1px solid ${color.lightGray};
  }

  .markup aside {
    font-size: ${fontSize.sm};
    font-family: ${fontFamily.sans};
    line-height: ${baseline(0.75)};
    color: ${color.gray};
    margin-bottom: ${baseline()};
  }
`;
