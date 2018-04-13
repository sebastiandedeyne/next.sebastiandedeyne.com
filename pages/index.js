import axios from 'axios';
import Link from 'next/link';
import { Component } from 'react';
import { baseline, color, fontFamily } from '../lib/style';
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
          <p>I'm a web designer & developer from Ghent, working at Spatie in Antwerp.</p>
          <p>I build websites, apps & other things with JavaScript, PHP, and CSS.</p>
        </div>
        <PostList title="Latest posts" posts={this.props.posts} />

        <style jsx>{`
          .about {
            margin-bottom: ${baseline(3)};
            font-family: ${fontFamily.mono};
            text-align: center;
            padding: 0 ${baseline(2)};
          }

          .about p + p {
            margin-top: ${baseline(0.5)};
          }
        `}</style>
      </Layout>
    );
  }
}
