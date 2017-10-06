export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_POSTS = 'GET_POSTS';
export const ADD_POSTS = 'ADD_POSTS';

export const getCategories = categories => ({
  type: GET_CATEGORIES,
  categories
});

export const getPostsAction = posts => ({
  type: GET_POSTS,
  posts
});

export const addPostsAction = posts => ({
  type: ADD_POSTS
});
