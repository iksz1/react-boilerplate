import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./App.scss";

export default class App extends Component {
  static propTypes = {
    msg: PropTypes.string.isRequired
  };

  static defaultProps = {
    msg: "Build something cool!"
  };

  render() {
    const { msg } = this.props;

    return (
      <div className={style.container}>
        <h1>{msg}</h1>
      </div>
    );
  }
}
