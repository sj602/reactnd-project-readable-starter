import React, { Component } from 'react';
import * as API from '../utils/api';
import Post from './post';

class Main extends Component {
  render() {
    return (
      <div>
        <div className='menuBar'>
          { API.getAllCategories() }
        </div>
        this is main
        <div className='posts'>
          { API.getAllPosts() }
        </div>
      </div>
    )
  }
}

export default Main;
