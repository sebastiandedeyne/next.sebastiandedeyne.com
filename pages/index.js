import axios from 'axios';
import { Component } from 'react';
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
        <PostList title="Latest posts" posts={this.props.posts} />
      </Layout>
    );
  }
}
