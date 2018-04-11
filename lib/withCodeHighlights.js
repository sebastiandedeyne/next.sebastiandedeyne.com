import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import hljs from 'highlight.js/lib/highlight';

const languages = [
  ['bash', require('highlight.js/lib/languages/bash')],
  ['css', require('highlight.js/lib/languages/css')],
  ['javascript', require('highlight.js/lib/languages/javascript')],
  ['php', require('highlight.js/lib/languages/php')],
  ['json', require('highlight.js/lib/languages/json')],
  ['xml', require('highlight.js/lib/languages/xml')],
];

languages.forEach(([name, definition]) => {
  hljs.registerLanguage(name, definition);
});

function highlight(block) {
  console.log(block);
  hljs.highlightBlock(block);
}

export default WrappedComponent =>
  class WithCodeHighLights extends Component {
    componentDidMount() {
      findDOMNode(this)
        .querySelectorAll('pre code')
        .forEach(highlight);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
