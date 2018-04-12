/* eslint-env jest */

const { getPost, getPosts } = require('../content');

test('it can get posts', async () => {
  const posts = await getPosts({ page: 1, perPage: 5 });

  expect(posts).toHaveLength(5);
  expect(posts[0]).toHaveProperty('date');
  expect(posts[0]).toHaveProperty('slug');
  expect(posts[0]).toHaveProperty('title');
});

test('it throws an error when no posts were found', async () => {
  await expect(getPosts({ page: 999, perPage: 5 })).rejects.toThrowError(
    'No posts found'
  );
});

test('it can get a post', async () => {
  const post = await getPost('adventure-time-with-webpack');

  expect(post).toHaveProperty('date');
  expect(post).toHaveProperty('slug', 'adventure-time-with-webpack');
  expect(post).toHaveProperty('title', 'Adventure Time with Webpack');
});

test("it throws an error when a post doesn't exist", async () => {
  await expect(getPost('non-existing')).rejects.toThrowError(
    'Post "non-existing" doesn\'t exist'
  );
});
