import React, { Component, Fragment } from "react";
import FilmList from "../components/main/FilmList";
import FilmDialog from "./EditFilm";
import { connect } from "react-redux";
import { getFilms } from "../actions";

class Dashboard extends Component {

  componentDidMount() {
    this.props.getFilms()
  }

  render() {
    const {filmList, selectedFilm} = this.props
    return (
      <Fragment>
        <FilmList filmList={filmList}/>
        {selectedFilm &&
          <FilmDialog initialFilm={selectedFilm}/>
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  filmList: state.filmList,
  selectedFilm: state.selectedFilm,
})

export default connect(mapStateToProps, {getFilms})(Dashboard)