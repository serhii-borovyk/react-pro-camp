import React, {Component} from 'react';

import FilmList from "../components/FilmList";
import Header from "../components/layout/Header";
import FilmDialog from "./dialogs/FilmDialog";

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <FilmList/>
        <FilmDialog/>
      </div>
    );
  }
}


