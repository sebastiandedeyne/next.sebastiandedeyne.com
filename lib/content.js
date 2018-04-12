/* eslint-env node */

const marked = require('marked');
const matter = require('gray-matter');
const { promisify } = require('util');

const glob = promisify(require('glob'));
const readFile = promisify(require('fs').readFile);

function getPosts({ page, perPage }) {
  return glob('./posts/*.md').then(files => {
    const identifiers = files
      .map(path => {
        return path.replace('./posts/', '').split('.')[1];
      })
      .reverse()
      .slice(page - 1, perPage);

    if (!identifiers.length) {
      throw new Error('No posts found');
    }

    return Promise.all(identifiers.map(getPost));
  });
}

function getPost(slug) {
  return getPostPath(slug).then(getPostContents);
}

function getPostPath(slug) {
  return glob(`./posts/*.${slug}.md`).then(files => {
    if (!files.length) {
      throw new Error(`Post "${slug}" doesn't exist`);
    }

    return files[0];
  });
}

function getPostContents(path) {
  return readFile(path, { encoding: 'utf8' }).then(contents => {
    const { content, data } = matter(contents);
    const [date, slug] = path.replace('./posts/', '').split('.');

    return { ...data, date, slug, contents: marked(content) };
  });
}

module.exports = { getPosts, getPost };
