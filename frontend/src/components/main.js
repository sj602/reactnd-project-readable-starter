import React, { Component } from 'react';
import * as API from '../utils/api';
import Post from './post';
import { connect } from 'react-redux';
import { getSortedPostsArray } from '../utils/helpers';

class Main extends Component {
  render() {
    const { posts } = this.props;
    const { sorting } = this.props.preferences;
    const postsArray = getSortedPostsArray(posts, sorting);

    return (
      <div>
        <div className='allPosts'>
          <h1>ALL POSTS</h1>
          <ol>
            { postsArray.map((post) => (<Post key={post.id} post={post} />)) }
          </ol>
          <div className='addPostContainer'>
            <h3>Add new post</h3>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({posts, preferences}) {
  return {
    posts,
    preferences,
  }
}

export default connect(mapStateToProps)(Main);
