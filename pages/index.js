import axios from 'axios';
import { Component } from 'react';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

export default class Posts extends Component {
  static async getInitialProps() {
    return {
      posts: await axios
        .get('http://localhost:3000/api/posts')
        .then(res => res.data)
    };
  }

  render() {
    return (
      <Layout>
        <PostList posts={this.props.posts} />
      </Layout>
    );
  }
}
