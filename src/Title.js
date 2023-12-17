import React, { Component } from "react";
import PropTypes from "prop-types";

class Title extends Component {
  render() {
    return <h1>{ this.props.content }</h1>
  }
}

export default Title;

Title.propTypes = {
  content: PropTypes.string
}