import axios from 'axios';
import Link from 'next/link';
import { Component } from 'react';
import Layout from '../components/Layout';
import withCodeHighlights from '../lib/withCodeHighlights';

const PostContents = withCodeHighlights(({ contents }) => (
  <div className="markup" dangerouslySetInnerHTML={{ __html: contents }} />
));

export default class Posts extends Component {
  static async getInitialProps({ query }) {
    return await axios
      .get(`http://localhost:3000/api/posts/${query.slug}`)
      .then(res => res.data);
  }

  render() {
    return (
      <Layout title={this.props.title}>
        <Link href="/">
          <a>Back</a>
        </Link>
        <header className="markup">
          <h1>{this.props.title}</h1>
        </header>
        <PostContents contents={this.props.contents} />
      </Layout>
    );
  }
}
