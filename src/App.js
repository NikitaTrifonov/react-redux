import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import UsersContainer from "./components/Navbar/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

let App = () => {
      return (
            <div className="app-wrapper">
                  <HeaderContainer />
                  <Navbar />
                  <div className="app-wrapper-content">
                        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                        <Route path="/dialogs" render={() => <DialogsContainer />} />
                        <Route path="/news" render={() => <News />} />
                        <Route path="/music" render={() => <Music />} />
                        <Route path="/settings" render={() => <Settings />} />
                        <Route path="/users" render={() => <UsersContainer />} />
                  </div>
            </div>
      );
};

export default App;
