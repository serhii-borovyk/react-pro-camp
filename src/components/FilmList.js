import React, {Fragment} from "react";
import FilmElement from "./FlimElement";
import Header from "./Header";
import {filmList} from "../movies";

export default class FilmList extends React.Component {

  state = {filmList}

  render() {
    return (
      <Fragment>
        <Header/>
        {this.state.filmList.map(film=>
          <FilmElement key={film.title} film={film}/>)
        }
      </Fragment>
    );
  }
}