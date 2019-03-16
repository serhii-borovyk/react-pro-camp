import React, { Component } from 'react';

import './App.css';
import FilmList from "./components/FilmList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilmList/>
      </div>
    );
  }
}

export default App;
