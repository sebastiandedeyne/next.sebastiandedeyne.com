const Rss = require('rss');
const marked = require('marked');
const matter = require('gray-matter');
const { promisify } = require('util');
const { format } = require('date-fns');

const glob = promisify(require('glob'));
const readFile = promisify(require('fs').readFile);

function getPosts({ page, perPage }) {
  return glob('./posts/*.md').then(files => {
    const identifiers = files
      .map(path => path.replace('./posts/', '').split('.')[1])
      .reverse();

    const pages = Math.ceil(identifiers.length / perPage);

    if (!identifiers.length) {
      throw new Error('No posts found');
    }

    const offset = (page - 1) * perPage;

    return Promise.all(
      identifiers.slice(offset, offset + perPage).map(getPost)
    ).then(posts => ({
      posts,
      pages,
      page
    }));
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

function getFeed() {
  return getPosts({ page: 1, perPage: 10 }).then(({ posts }) => {
    const feed = new Rss({
      title: 'Sebastian De Deyne',
      description: 'description',
      feed_url: 'https://sebastiandedeyne.com/feed',
      site_url: 'https://sebastiandedeyne.com',
      managingEditor: 'sebastiandedeyne@gmail.com',
      webMaster: 'sebastiandedeyne@gmail.com',
      copyright: `${format(new Date(), 'YYYY')} Sebastian De Deyne`,
      language: 'en',
      pubDate: posts[0] ? format(posts[0].date) : null
    });

    posts.forEach(post => {
      feed.item({
        title: post.title,
        description: post.contents,
        url: `https://sebastiandedeyne.com/posts/${post.slug}`,
        date: format(post.date)
      });
    });

    return feed.xml();
  });
}

module.exports = { getPosts, getPost, getFeed };
