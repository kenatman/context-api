import React, { useContext } from "react";
import store from "../../store";
import NotificationPresenter from "./NotificationPresenter";

const NotificationContainer = (props) => {
  const checkNotification = useContext(store).checkNotification;
  const deleteNotification = useContext(store).deleteNotification;

  return (
    <NotificationPresenter
      {...props}
      checkNotification={checkNotification}
      deleteNotification={deleteNotification}
    />
  );
};

export default NotificationContainer;
