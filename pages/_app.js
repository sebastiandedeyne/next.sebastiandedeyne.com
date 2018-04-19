import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import App, { Container } from 'next/app';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    let progressTimeout;

    Router.onRouteChangeStart = () => {
      progressTimeout = window.setTimeout(() => {
        NProgress.start();
      }, 500);
    };

    Router.onRouteChangeComplete = () => {
      window.clearTimeout(progressTimeout);

      NProgress.done();
    };

    Router.onRouteChangeError = () => {
      window.clearTimeout(progressTimeout);

      NProgress.done();
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
