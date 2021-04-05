import React from "react";
import { ToastContainer } from "react-toastify";

import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// PAGES
import Main from "./pages/Main/Main";
import MiniGames from "./pages/MiniGames/MiniGames";
import Settings from "./pages/Settings/Settings";
import { Statistics } from "./pages/Statistics/Statistics";
import TextBook from "./pages/TextBook/TextBook";
import AboutTeam from "./pages/AboutTeam/AboutTeam";
import AudioCall from "./pages/MiniGames/AudioCall/AudioCall";
import Sprint from "./pages/MiniGames/Sprint/Sprint";
// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <ToastContainer />
        <Switch>
          <Route path={"/"} component={Main} exact />
          <Route path={"/mini-games"} component={MiniGames} exact />
          <Route path={"/audiocall"} component={AudioCall} exact />
          <Route path={"/sprint"} component={Sprint} exact />
          <Route path={"/settings"} component={Settings} exact />
          <Route path={"/statistics"} component={Statistics} exact />
          <Route path={"/text-book"} component={TextBook} exact />
          <Route path={"/about-team"} component={AboutTeam} exact />
          <Redirect to={"/"} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
};

export default App;
