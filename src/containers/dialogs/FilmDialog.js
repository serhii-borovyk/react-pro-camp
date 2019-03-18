import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from "react-redux";
import {resetSelectedFilm, saveFilm} from "../../actions";

class FilmDialog extends React.Component {

  state = {
    film: {
      Title: null,
      Released: null,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedFilm && prevState.film.Title === null) {
      return {...prevState, film: nextProps.selectedFilm}
    }
    return null
  }

  resetState = () => {
    this.setState({film: {Title: null}})
  }

  handleClose = () => {
    this.props.resetSelectedFilm()
    this.resetState()
  };

  handleSave = () => {
    this.props.saveFilm(this.state.film)
    this.resetState()
  };

  handleChange = name => event => this.setState({
    film: {
      ...this.state.film,
      [name]: event.target.value
    }
  })

  render() {
    const {selectedFilm} = this.props;
    const {film} = this.state;
    return (
      <div>
        <Dialog
          open={!!selectedFilm}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit film</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="Title"
              label="Title"
              value={film.Title}
              onChange={this.handleChange('Title')}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="Released"
              label="Released"
              value={film.Released}
              onChange={this.handleChange('Released')}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedFilm: state.selectedFilm,
})

export default connect(mapStateToProps, {resetSelectedFilm, saveFilm})(FilmDialog)