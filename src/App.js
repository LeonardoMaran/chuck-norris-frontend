import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Piadas from './Piadas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Piadas />
      </div>
    );
  }
}

export default App;
