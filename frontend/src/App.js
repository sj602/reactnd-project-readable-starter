import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as API from './utils/api';
import * as actions from './actions';

import Main from './components/main'
import Header from './components/header';

class App extends Component {
  constructor(props){
    super(props);
    this.fetchCategories();
    this.fetchPosts();
  }

  fetchCategories(){
    API.fetchCategories().then(categories => {
      this.props.loadCategories({type:actions.LOAD_CATEGORIES, categories});
    });
  }

  fetchPost(){
    API.fetchPosts().then(posts => {
      this.props.loadPosts({type:actions.LOAD_POSTS, posts});
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCategories: (categories) => dispatch(actions.LOAD_CATEGORIES(categories)),
    loadPosts: (posts) => dispatch(actions.LOAD_POSTS(posts)),
  };
};

export default connect(mapDispatchToProps)(App);
