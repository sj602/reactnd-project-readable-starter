const api = `http://localhost:3001`;

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
};

export const getAllCategories = () => {
  return fetch(
    `${api}/categories`, { headers } // headers(O), header(X)/ method: 'GET'은 DEFAULT값.
  ).then(response => response.json()).then(data => {
    return data.categories;
  });
};

export const getAllPosts = () => {
  return fetch(
    `${api}/posts`, { headers }
  ).then(response => response.json()).then(data => {
    return data;
  });
};
