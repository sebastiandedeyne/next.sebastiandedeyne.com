import axios from 'axios';
import Link from 'next/link';
import { Component } from 'react';
import { baseline, fontFamily, fontSize } from '../lib/style';
import Layout from '../components/Layout';
import PostList from '../components/posts/PostList';

export default class Posts extends Component {
  static async getInitialProps() {
    return await axios
      .get('http://localhost:3000/api/posts?perPage=5')
      .then(res => res.data);
  }

  render() {
    return (
      <Layout>
        <div className="about">
          <p>
            I'm a web designer & developer from Ghent, working at{' '}
            <a href="https://spatie.be" className="link">
              Spatie
            </a>, Antwerp.
          </p>
          <p>
            I build websites, apps & other things with JavaScript, PHP, and CSS.
          </p>
        </div>
        <PostList title="Latest posts" posts={this.props.posts} />
        <nav className="more">
          <Link href="/posts">
            <a className="link">All posts</a>
          </Link>
        </nav>

        <style jsx>{`
          .about {
            margin: ${baseline(1)} auto ${baseline(4)};
            font-family: ${fontFamily.mono};
            text-align: center;
            width: 66%;
          }

          .about p + p {
            margin-top: ${baseline(0.5)};
          }

          .more {
            font-size: ${fontSize.xs};
            margin-top: ${baseline(1.5)};
          }
        `}</style>
      </Layout>
    );
  }
}
