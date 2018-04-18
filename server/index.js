/* eslint-disable no-console */

const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const responseCache = require('./responseCache')({
  enabled: !dev,
  debug: true
});

const { getPost, getPosts, getFeed } = require('./content');

const notFound = res => () => {
  res.status(404).json({ error: 'Not found' });
};

app
  .prepare()
  .then(() => {
    const server = express();

    // API

    server.use('/api', responseCache);

    server.get('/api/posts', (req, res) => {
      getPosts({
        page: req.query.page || 1,
        perPage: req.query.perPage || 10
      }).then(posts => res.json(posts));
    });

    server.get('/api/posts/:slug', (req, res) => {
      getPost(req.params.slug)
        .then(post => res.json(post))
        .catch(notFound(res));
    });

    // Feed

    server.get('/feed', responseCache, (req, res) => {
      getFeed().then(feed => {
        res.set('Content-Type', 'text/xml');
        res.send(feed);
      });
    });

    // Site

    server.get('/posts/:slug', (req, res) => {
      app.render(req, res, '/post', { slug: req.params.slug });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    // Run

    server.listen(3000, err => {
      if (err) {
        throw err;
      }
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });
