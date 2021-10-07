import React from "react";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreator());
    },
    updateNewPostText: (text) => {
      let action = updateNewPostTextCreator(text);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
