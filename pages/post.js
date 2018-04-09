import axios from "axios";
import Link from "next/link";
import { Component } from "react";

export default class Posts extends Component {
  static async getInitialProps({ query }) {
    return await axios
      .get(`http://localhost:3000/api/posts/${query.slug}`)
      .then(res => res.data);
  }

  render() {
    return (
      <div>
        <Link href="/posts">
          <a>Back</a>
        </Link>
        <h1>{this.props.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </div>
    );
  }
}
