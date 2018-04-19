import flush from 'styled-jsx/server';
import Document, { Head, Main, NextScript } from 'next/document';
import {
  baseline,
  color,
  containerWidth,
  fontFamily,
  fontSize
} from '../lib/style';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
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

          ::selection {
            background: ${color.lightGray};
          }

          ::-moz-selection {
            background: ${color.lightGray};
          }

          html {
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

          .wrapper {
            padding-left: ${baseline(1)};
            padding-right: ${baseline(1)};
            width: 100%;
            max-width: ${containerWidth};
            margin-left: auto;
            margin-right: auto;
          }

          .link,
          .with-links a {
            color: ${color.red};
            border-bottom: 1px solid ${color.red};
          }

          .caps {
            color: ${color.gray};
            font-size: ${fontSize.xs};
            letter-spacing: 0.1em;
            text-transform: uppercase;
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
            font-size: ${fontSize.xs};
            font-family: ${fontFamily.sans};
            line-height: ${baseline(0.75)};
            color: ${color.gray};
            margin-bottom: ${baseline()};
          }

          #nprogress .bar {
            background: ${color.red};
            position: fixed;
            z-index: 999;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
          }
        `}</style>
      </html>
    );
  }
}
