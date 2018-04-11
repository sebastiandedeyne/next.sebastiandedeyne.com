const fs = require('fs');
const glob = require('glob');
const marked = require('marked');
const matter = require('gray-matter');

function getPosts() {
  return new Promise(resolve => {
    glob('./posts/*.md', (error, files) => {
      const slugs = files.map(path =>
        path.split('.').reverse()[1]
      );

      Promise.all(slugs.map(getPost)).then(resolve);
    });
  });
}

function getPost(slug) {
  return getPostPath(slug)
        .then(getPostContents)
        .then(parsePostContents)
        .then(post => ({ ...post, slug }));
}

function getPostPath(slug) {
  return new Promise((resolve, reject) => {
    glob(`./posts/*.${slug}.md`, (error, files) => {
      if (error) {
        reject(error);
      }

      if (!files.length) {
        reject(`Post "${slug}" doesn't exist`);
      }

      resolve(files[0]);
    });
  });
}

function getPostContents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (error, contents) => {
      if (error) {
        reject(error);
      } else {
        resolve(contents);
      }
    });
  });
}

function parsePostContents(contents) {
  const { content, data } = matter(contents);

  return { ...data, contents: marked(content) };
}

module.exports = { getPosts, getPost };
