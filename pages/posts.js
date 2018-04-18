import { Component } from 'react';
import { getPosts } from '../lib/api';
import Layout from '../components/Layout';
import PostList from '../components/posts/PostList';

export default class Posts extends Component {
  static async getInitialProps({ query, req }) {
    return await getPosts({
      page: query.page || 1,
      isServerRequest: !!req
    });
  }

  render() {
    return (
      <Layout section="/posts">
        <PostList
          title={
            'All posts' +
            (this.props.page != 1 ? ` - page ${this.props.page}` : '')
          }
          posts={this.props.posts}
          pagination={{
            page: this.props.page,
            pages: this.props.pages
          }}
        />
      </Layout>
    );
  }
}
