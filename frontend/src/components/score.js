import React, { Component } from 'react';

class Score extends Component {
  render() {
    const { score, onUpvote, onDownvote } = this.props;
    return (
      <div>
        <button onClick={() => {this.onUpvote()}}></button>
        <div>{score}</div>
        <button onClick={() => {this.onDownvote()}}></button>
      </div>
    );
  }
}

export default Score;
