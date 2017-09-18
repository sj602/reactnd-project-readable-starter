import React, { Component } from 'react';
import Main from './components/main'
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => ( // '(' 대신에 '{' 썻더니 에러났었음. return 다음에 (가 오는 원리인듯.
          <Main />
        )} />
      </div>
    );
  }
}

export default App;
