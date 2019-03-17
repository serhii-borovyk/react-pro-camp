import React from "react";
import FilmElement from "./FilmElement";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import {connect} from "react-redux";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 1000,
  },
});

const FilmList = props => {
  const {filmList, classes} = props;
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {filmList.map(film =>
          <FilmElement key={film.imdbID} film={film}/>)
        }
      </GridList>
    </div>
  );
};

FilmList.propTypes = {
  classes: PropTypes.object.isRequired,
  filmList: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  filmList: state.filmList,
})

export default connect(mapStateToProps)(withStyles(styles)(FilmList))