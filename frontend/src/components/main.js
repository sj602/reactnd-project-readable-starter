import React, { Component } from 'react';
import * as API from '../utils/api';
import Post from './post';

class Main extends Component {
  state = {
    categories: [],
    posts: [],
  }

  componentDidMount() {
    API.getAllCategories().then(data => {
      this.setState({ categories: data });
    });

    API.getAllPosts().then(data => {
      this.setState({ posts: data });
    });
  }

  render() {
    return (
      <div>
        <div className='menuBar'>
          {
            this.state.categories.map(item => // 여기서 {}를 써서 에러가 계속 났음. not {} with JSX
              <li><a href={`/category/${item.name}`}>{item.name}</a></li>
            )
          }
        </div>
        this is main
        <div className='posts'>
          {
            this.state.posts.map(item =>
              <li>{item}</li>
            )
          }
        </div>
      </div>
    )
  }
}

export default Main;
