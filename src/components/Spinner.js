import React, { Component } from "react";
import spin from "../loading.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={spin} alt="loading" />
      </div>
    );
  }
}
