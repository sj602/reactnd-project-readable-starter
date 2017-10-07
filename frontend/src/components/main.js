import React, { Component } from 'react';
import * as API from '../utils/api';
import Post from './post';

class Main extends Component {
  state = {
    categories: [],
  }

  componentDidMount() {
    const _that = this;
    API.getAllCategories().then(data => {
      _that.setState({ categories: data });
    });
  }

  render() {
    return (
      <div>
        <div className='menuBar'>
          {
            this.state.categories.map(item => {
              <li><a href={`/category/${item.name}`}>{item.name}</a></li>
            })
          }
        </div>
        this is main
        <div className='posts'>

        </div>
      </div>
    )
  }
}

export default Main;
