import React from "react";
import classes from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

let DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;

  return (
    <div className={classes.dialogItem}>
      <div className={classes.avatar}></div>
      <NavLink to={path} activeClassName={classes.activeLink}>
        <img
          src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg"
          alt="avatar"
        />
        <span className={classes.name}>{props.name}</span>
      </NavLink>
    </div>
  );
};

export default DialogItem;
