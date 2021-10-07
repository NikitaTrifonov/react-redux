import React from "react";
import classes from "./Message.module.css";

let Message = (props) => {
  return (
    <div className={`${props.myMessage ? classes.myMessage : classes.message}`}>
      - {props.message}
    </div>
  );
};

export default Message;
