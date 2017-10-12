const api = `http://localhost:3001`;

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
};

export const fetchCategories = () => {
  return fetch(
    `${api}/categories`, { headers } // headers(O), header(X)/ method: 'GET'은 DEFAULT값.
  ).then(response => response.json()).then(data => {
    return data.categories;
  });
};

export const fetchPosts = () => {
  return fetch(
    `${api}/posts`, { headers }
  ).then(response => response.json()).then(data => {
    return data;
  });
};

export const upvotePost = (post_id) => {
  return fetch(
    `${api}/posts/${post_id}`, { method: 'POST', headers, option: 'upVote' }
  ).then(response => response.json()).then(data => {
    return data;
  });
};

export const downvotePost = (post_id) => {
  return fetch(
    `${api}/posts/${post_id}`, { method: 'POST', headers, option: 'downVote' }
  ).then(response => response.json()).then(data => {
    return data;
  });
};

export const deletePost = (post_id) => {
  return fetch(
    `${api}/posts/${post_id}`, { method: 'DELETE', headers }
  ).then(response => response.json()).then(data => {
    return data;
  });
};
