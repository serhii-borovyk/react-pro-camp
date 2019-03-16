import React from "react";

export default class FilmElement extends React.Component {
  render() {
    return (
      <li>{this.props.film.title}</li>
    );
  }
}