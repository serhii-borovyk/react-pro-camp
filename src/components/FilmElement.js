import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import poster_none from "../static/poster_none.png";

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

const FilmElement = props => {
  const {film, classes, handleClick} = props;
  return (
    <GridListTile onClick={() => handleClick(film)} className={classes.gridListTile}>
      <img src={film.Poster || poster_none} alt={film.Title}/>
      <GridListTileBar
        title={film.Title}
        subtitle={<span>Date: {film.Released}</span>}
      />
    </GridListTile>
  );
};

FilmElement.propTypes = {
  classes: PropTypes.object.isRequired,
  film: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilmElement);