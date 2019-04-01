import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button/index';
import {Field, Form} from "react-final-form/typescript";
import {connect} from "react-redux";
import {getFilm, saveFilm} from "../actions";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

class EditFilm extends React.Component {


  componentDidMount() {
    this.props.getFilm(this.props.match.params.number);
  }

  render() {
    const {selectedFilm} = this.props
    return (
      <Fragment>
        <Form
          onSubmit={this.props.saveFilm}
          initialValues={{...selectedFilm}}
          render={({handleSubmit}) => (
            <Fragment>
              <form onSubmit={handleSubmit} noValidate>
                Edit film
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
                <Button type="submit" color="primary">
                  Save
                </Button>
              </form>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

EditFilm.propTypes = {
  saveFilm: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  selectedFilm: state.selectedFilm,
})

export default connect(mapStateToProps, {saveFilm, getFilm})(EditFilm)