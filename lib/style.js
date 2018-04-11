import css from 'styled-jsx/css';

export const color = {
  black: '#222',
  red: '#df6d6d',
  darkGray: '#441a1a',
  gray: '#a5a5a5',
  lightGray: '#e8e8e8'
};

export const fontFamily = {
  default: 'Source Sans Pro',
  mono: 'monospace'
};

export const fontSize = {
  sm: '14px',
  default: '18px',
  lg: '24px',
  xl: '26px'
};

export const baseline = 30;

export const global = css`
  body {
    color: ${color.darkGray};
    font-family: ${fontFamily.default};
    font-size: ${fontSize.default};
    line-height: ${baseline}px;
  }

  .markup a {
    color: ${color.red};
    border-bottom: 1px solid ${color.red};
    text-decoration: none;
  }

  .markup h1 {
    margin: ${baseline * 2}px 0;
    font-weight: 700;
    font-size: ${fontSize.xl};
    line-height: 1.3;
    color: ${color.red};
  }

  .markup h2 {
    color: ${color.black};
    font-size: ${fontSize.lg};
    font-weight: 700;
    margin-top: ${baseline * 2}px;
    margin-bottom: ${baseline}px;
  }

  .markup h3 {
    font-weight: 700;
    margin-bottom: ${baseline * 0.5}px;
  }

  .markup p {
    margin-bottom: ${baseline}px;
  }

  .markup strong {
    font-weight: 700;
  }

  .markup em {
    font-style: italic;
  }

  .markup ul {
    margin-bottom: ${baseline}px;
    list-style: disc;
    list-style-position: inside;
  }

  .markup ol {
    list-style-type: decimal;
    list-style-position: inside;
  }

  .markup code {
    font-size: 0.9em;
    font-family: monospace;
    font-style: normal !important;
    border-radius: 1px;
    border: 1px solid color(${color.lightGray} blackness(5%));
    padding: 0 0.2em;
  }

  .markup pre {
    margin-bottom: ${baseline}px;
  }

  .markup pre code {
    padding: ${baseline * 0.75}px;
    padding-right: ${baseline * 0.5}px;
    margin-left: -0.3em;
    margin-right: -0.3em;
    display: block;
    border-radius: 1px;
    border: 1px solid color(${color.lightGray} blackness(5%));
    box-shadow: 1px 2px 0 #fbf8f8;
    font-size: 0.8em;
    line-height: 1.6;
  }

  .markup blockquote {
    position: relative;
    padding-left: ${baseline * 1.5}px;
    padding-right: ${baseline}px;
    margin-bottom: ${baseline}px;
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
    margin: ${baseline * 2} -0.3em;
    border: none;
    border-bottom: 1px solid ${color.lightGray};
  }

  .markup aside {
    font-size: ${fontSize.sm};
    line-height: ${baseline * 0.75};
    font-style: italic;
    color: ${color.lightGray};
    margin-bottom: ${baseline}px;
  }
`;
