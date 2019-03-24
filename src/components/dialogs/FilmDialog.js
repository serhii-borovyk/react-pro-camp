import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from "react-redux";
import {resetSelectedFilm, saveFilm} from "../../actions";
import PropTypes from "prop-types";
import {Field, Form} from "react-final-form";
import {TextField} from 'final-form-material-ui';

class FilmDialog extends React.Component {

  handleClose = () => {
    this.props.resetSelectedFilm()
  };

  render() {
    const {initialFilm} = this.props
    return (
      <div>
        <Dialog
          open={!!initialFilm}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <Form
            onSubmit={this.props.saveFilm}
            initialValues={{...initialFilm}}
            render={({handleSubmit}) => (
              <Fragment>
                <form onSubmit={handleSubmit} noValidate>
                  <DialogTitle id="form-dialog-title">Edit film</DialogTitle>
                  <DialogContent>
                    <Field
                      autoFocus
                      fullWidth
                      name="Title"
                      component={TextField}
                      type="text"
                      label="Title"
                    />
                    <Field
                      fullWidth
                      name="Year"
                      component={TextField}
                      type="number"
                      label="Year"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button type="submit" color="primary">
                      Save
                    </Button>
                  </DialogActions>
                </form>
              </Fragment>
            )}
          />
        </Dialog>
      </div>
    );
  }
}

FilmDialog.propTypes = {
  defaultFilm: PropTypes.object,
  resetSelectedFilm: PropTypes.func.isRequired,
  saveFilm: PropTypes.func.isRequired,
};

export default connect(null, {resetSelectedFilm, saveFilm})(FilmDialog)