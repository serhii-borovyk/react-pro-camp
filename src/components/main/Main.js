import React, { Component, Fragment } from "react";
import Dashboard from "../../pages/Dashboard";
import { Switch, Route } from 'react-router-dom'
import EditFilm from "../../pages/EditFilm";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={Dashboard}/>
        <Route path='/film/:id/edit' component={EditFilm}/>
      </Switch>
    );
  }
}

export default Main