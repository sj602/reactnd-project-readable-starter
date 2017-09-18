import React, { Component } from 'react';

class Post extends Component {
  getCategories() {
    const url = `http://192.168.0.9:3001/`;
    fetch(
      url,
      {
        method: 'GET',
        header: { 'Authorization': 'thisisauthorization'},
        mode: 'no-cors',
      },
      ).then((cat) => {
        return cat;
    })
  }

  render() {
    const categories = this.getCategories();
    return (
      <div>
        { categories }
      </div>
    )
  }
}

export default Post;
