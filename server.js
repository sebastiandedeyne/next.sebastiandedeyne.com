/* eslint-env node */
/* eslint-disable no-console */

const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { getPost, getPosts } = require('./lib/content');

const notFound = res => () => {
  res.status(404).json({ error: 'Not found' });
};

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/api/posts', (req, res) => {
      getPosts({ page: 1, perPage: 10 })
        .then(posts => res.json(posts))
        .catch(notFound(res));
    });

    server.get('/api/posts/:slug', (req, res) => {
      getPost(req.params.slug)
        .then(post => res.json(post))
        .catch(notFound(res));
    });

    server.get('/posts/:slug', (req, res) => {
      app.render(req, res, '/post', { slug: req.params.slug });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

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
