import React, { Component } from "react";
import HeaderPresenter from "./HeaderPresenter";

class HeaderContainer extends Component {
  render() {
    return <HeaderPresenter {...this.props} />;
  }
}

export default HeaderContainer;
