// import { combineReducers } from 'redux';
// import { GET_CATEGORIES, GET_POSTS, ADD_POSTS } from '../actions';
//
// const initialState = {
//   categories: [],
//   posts: [],
// };
//
// function category(state = initialState, action) {
//   switch (action.type) {
//     case 'GET_CATEGORIES':
//       return action.categories;
//     default:
//       return state;
//   }
// }
//
// function post(state = initialState, action) {
//   switch (action.type) {
//     case 'GET_POSTS':
//       return Object.assign({}, state, {
//         posts: actions.posts
//       });
//
//     default:
//       return state;
//   }
// }
//
// export const rootReducer = combineReducers({
//   categories: category,
//   posts: post
// });
