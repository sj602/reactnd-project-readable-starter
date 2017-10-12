import { combineReducers } from 'redux';
import { objectFromArray } from '../utils/helpers';
// import { LOAD_CATEGORIES, LOAD_POSTS, ADD_POST } from '../actions';
import {
  // posts actions
  LOAD_POSTS,
  ADD_POST,
  UPVOTE_POST,
  DOWNVOTE_POST,
  EDIT_POST,
  DELETE_POST,

  // comments actions
  LOAD_COMMENTS,
  ADD_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,

  // categories actions
  LOAD_CATEGORIES,

  // preferences actions
  SET_SORTING_PREFERENCE_BY_DATE,
  SET_SORTING_PREFERENCE_BY_SCORE
} from '../actions'

function posts(state = {}, action) {
  const { posts, post_id, post } = action;

  switch (action.type) {
    case LOAD_POSTS:
      const filteredPosts = posts.filter(p => (p.deleted !== true))
      return {
        ...state,
        ...objectFromArray(filteredPosts, 'id')
      };

    case ADD_POST:
    case EDIT_POST:
      return {
        ...state,
        [post.id]: {
          ...state[post_id],
          'voteScore': state[post_id]['voteScore'] + 1
        }
      };

    case DOWNVOTE_POST:
      return {
        ...state,
        [post_id]: {
          ...state[post_id],
          'voteScore': state[post_id]['voteScore'] - 1
        }
      };

    case DELETE_POST:
      const newState = {...state};
      delete newState[post_id];
      return newState;

    default:
      return state;
  }
}

function comments(state = {}, action) {
  const { comments, comment_id, comment } = action;

  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state,
        ...objectFromArray(comments, 'id')
      };

    case ADD_COMMENT:
    case EDIT_COMMENT:
      return {
        ...state,
        [comment.id]: comment
      };

    case UPVOTE_COMMENT:
      return {
        ...state,
        [comment_id]: {
          ...state[comment_id],
          'voteScore': state[comment_id]['voteScore'] + 1
        }
      };

    case DOWNVOTE_COMMENT:
      return {
        ...state,
        [comment_id]: {
          ...state[comment_id],
          'voteScore': state[comment_id]['voteScore'] - 1
        }
      };

    case DELETE_COMMENT:
      const newState = {...state};
      delete newState[comment_id];
      return newState;

    default:
      return state;
  }
}

function categories(state = {}, action) {
  const { categories } = action;

  switch (action.type) {
    case LOAD_CATEGORIES:
      return objectFromArray(categories, 'name');

    default:
      return state;
  }
}

function preferences(state = {}, action) {
  switch (action.type) {
    case SET_SORTING_PREFERENCE_BY_DATE:
      return {
        ...state,
        ['sorting']: 'byDate'
      };

    case SET_SORTING_PREFERENCE_BY_SCORE:
      return {
        ...state,
        ['sorting']: 'byScore'
      };

    default:
      return state;
  }
}

export default combineReducers({ posts, comments, categories, preferences });
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
//         posts: action.posts
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
