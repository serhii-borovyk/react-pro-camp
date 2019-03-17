import React, {Component} from 'react';

import FilmList from "../components/FilmList";
import Header from "../components/layout/Header";

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <FilmList/>
      </div>
    );
  }
}


