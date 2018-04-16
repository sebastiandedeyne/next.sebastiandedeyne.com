import axios from 'axios';
import { format } from 'date-fns';
import { Component } from 'react';
import { baseline } from '../lib/style';
import Layout from '../components/Layout';
import PostHeader from '../components/posts/PostHeader';
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
      <Layout title={this.props.title} section="/posts">
        <div className="inner">
          <PostHeader
            title={this.props.title}
            info={
              format(this.props.date, 'MMMM Mo, YYYY') +
              (this.props.era ? ` — ${this.props.era}` : '')
            }
            margin={`0 0 ${baseline(3)}`}
          />
          <PostContents contents={this.props.contents} />
        </div>
        <style jsx>{`
          .inner {
            max-width: 38em;
          }
        `}</style>
      </Layout>
    );
  }
}
