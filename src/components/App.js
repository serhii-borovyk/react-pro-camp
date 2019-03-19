import React from 'react';

import FilmList from "../containers/FilmList";
import Header from "./layout/Header";
import FilmDialog from "../containers/dialogs/FilmDialog";

const App = () => (
  <div className="App">
    <Header/>
    <FilmList/>
    <FilmDialog/>
  </div>
);

export default App


