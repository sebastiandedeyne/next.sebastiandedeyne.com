const fs = require("fs");
const glob = require("glob");
const marked = require("marked");
const matter = require("gray-matter");

function getPosts() {
  return new Promise(resolve => {
    glob("./posts/*.md", (error, files) => {
      const slugs = files.map(path =>
        path.replace("./posts/", "").replace(".md", "")
      );

      Promise.all(slugs.map(getPost)).then(resolve);
    });
  });
}

function getPost(slug) {
  return getPostContents(`./posts/${slug}.md`)
    .then(parsePostContents)
    .then(post => ({ ...post, slug }));
}

function getPostContents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf8" }, (error, contents) => {
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

  return { ...data, content: marked(content) };
}

module.exports = { getPosts, getPost };
