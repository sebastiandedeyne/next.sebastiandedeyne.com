import axios from 'axios';
import { Component } from 'react';
import { format } from 'date-fns';
import { baseline } from '../lib/style';
import Header from '../components/Header';
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
        <Header
          title={this.props.title}
          info={`Published on ${format(this.props.date, 'MMMM Mo, YYYY')}`}
          margin={`${baseline(2)} 0 ${baseline(3)}`}
        />
        <PostContents contents={this.props.contents} />
      </Layout>
    );
  }
}
