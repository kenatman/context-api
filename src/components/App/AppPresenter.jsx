import React, { useContext } from "react";
import Header from "../Header";
import Notification from "../Notification";
import Flex from "styled-flex-component";
import store from "../../store";

const AppPresenter = (props) => {
  const notifications = useContext(store).notifications;

  return (
    <>
      <Header />
      <Flex alignCenter full column>
        {Object.keys(notifications).map((key) => (
          <Notification key={key} item={notifications[key]} />
        ))}
      </Flex>
    </>
  );
};

export default AppPresenter;
