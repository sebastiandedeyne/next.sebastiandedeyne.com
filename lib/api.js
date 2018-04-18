import axios from 'axios';

function domain(isServerRequest) {
  return isServerRequest ? 'http://localhost:3000' : '';
}

export function getPosts({ page = 1, perPage = 10, isServerRequest }) {
  return axios
    .get(`${domain(isServerRequest)}/api/posts?page=${page}&perPage=${perPage}`)
    .then(res => res.data);
}

export function getPost({ slug, isServerRequest }) {
  return axios
    .get(`${domain(isServerRequest)}/api/posts/${slug}`)
    .then(res => res.data);
}
