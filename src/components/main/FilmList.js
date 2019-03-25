import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import FilmElement from "./FilmElement";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
});

const FilmList = props => {
  const {filmList, classes} = props;
  return (
    <div className={classes.root}>
      <GridList>
        {filmList.map(film =>
          <FilmElement
            key={film.imdbID}
            film={film}
          />)
        }
      </GridList>
    </div>
  );
};

FilmList.propTypes = {
  classes: PropTypes.object.isRequired,
  filmList: PropTypes.array.isRequired,
};

export default withStyles(styles)(FilmList)