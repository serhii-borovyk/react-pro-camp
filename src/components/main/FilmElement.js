import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import poster_none from "../../static/poster_none.png";
import { connect } from "react-redux";
import { selectFilm } from "../../actions";

const styles = {
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  gridListTile: {
    margin: 'auto',
    width: 300,
    height: 400,
  },
};

class FilmElement extends Component {
  getImageSrc = () => {
    const {Poster} = this.props.film;
    if (!Poster || Poster === 'N/A') {
      return poster_none
    }
    return Poster;
  };

  render() {
    const {film, classes, selectFilm} = this.props;
    return (
      <GridListTile onClick={() => selectFilm(film)} className={classes.gridListTile}>
        <img src={this.getImageSrc()} alt={film.Title}/>
        <GridListTileBar
          title={film.Title}
          subtitle={<span>Year: {film.Year}</span>}
        />
      </GridListTile>
    );
  }
}

FilmElement.propTypes = {
  classes: PropTypes.object.isRequired,
  film: PropTypes.object.isRequired,
  selectFilm: PropTypes.func.isRequired,
};

export default connect(null, {selectFilm})(withStyles(styles)(FilmElement));