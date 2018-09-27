import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Test Github Pages</h1>
        </header>
        <p className="App-intro">
          Ceci est un test d'une app React faite avec create-react-app sur Github Pages !
        </p>
      </div>
    );
  }
}

export default App;
