import React, { Component } from 'react';
import * as API from '../utils/api';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  render() {
    return (
      <div>
      this is post
      { API.getAllCategories() }
      { API.getAllPosts() }
      </div>
    )
  }
}

export default Post;
