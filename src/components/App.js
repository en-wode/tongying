import React, { Component } from 'react';
import RouterIndex from '../router/index';
require('../assets/css/index.css');
class App extends Component {
  render() {
    return (
      <div className="App">
          <RouterIndex/>
      </div>
    );
  }
}

export default App;
