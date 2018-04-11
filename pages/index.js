import axios from 'axios';
import Link from 'next/link';
import { Component } from 'react';
import Layout from '../components/Layout';

export default class Posts extends Component {
  static async getInitialProps() {
    return {
      posts: await axios
        .get('http://localhost:3000/api/posts')
        .then(res => res.data)
    };
  }

  render() {
    const pages = Array.from({ length: this.props.pages }).map(
      (_, page) => page + 1
    );

    return (
      <Layout>
        Hello, world!
        <ul>
          {this.props.posts.map(({ slug, title }) => (
            <li key={slug}>
              <Link href={`/post?slug=${slug}`} as={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {pages.map(page => (
            <li key={page}>
              <Link href={`/posts?page=${page}`}>
                <a>{page}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}
