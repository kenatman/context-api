import React, { Component } from "react";
import store from "../../store";
import AppPresenter from "./AppPresenter";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`${reset}; body{background-color:#D980FA}`;

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this._deleteNotification = (id) => {
      const updated = { ...this.state.notifications };
      delete updated[id];
      this.setState({ notifications: updated });
    };

    this._checkNotification = (id) => {
      const updated = { ...this.state.notifications };
      updated[id] = { ...updated[id], seen: true };
      this.setState({ notifications: updated });
    };

    this.state = {
      notifications: {
        1: { id: 1, text: "I am gifted!!", seen: false },
        2: { id: 2, text: "I am talented!!", seen: true },
        3: { id: 3, text: "I am loved!!", seen: false },
      },
    };
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <store.Provider
          value={{
            notifications: this.state.notifications,
            deleteNotification: this._deleteNotification,
            checkNotification: this._checkNotification,
          }}
        >
          <AppPresenter />
        </store.Provider>
      </>
    );
  }
}

export default AppContainer;
