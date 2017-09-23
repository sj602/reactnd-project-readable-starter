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
  fetch(
    `${api}/categories`, { headers } // method: 'GET'을 지우니 디버그됬음
  ).then(response => response.json()).then(data => data.categories);
};

export const getAllPosts = () => {
  fetch(
    `${api}/posts`, { headers }
  ).then(response => response.json()).then(data => {
    console.log(data);
  });
};
