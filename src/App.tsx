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
<<<<<<< HEAD
import Main from "./pages/Main/Main";
import MiniGames from "./pages/MiniGames/MiniGames";
import Settings from "./pages/Settings/Settings";
import { Statistics } from "./pages/Statistics/Statistics";
import TextBook from "./pages/TextBook/TextBook";
import AboutTeam from "./pages/AboutTeam/AboutTeam";
import AudioCall from "./pages/MiniGames/AudioCall/AudioCall";
=======
import Main from './pages/Main/Main';
import MiniGames from './pages/MiniGames/MiniGames';
import Settings from './pages/Settings/Settings';
import { Statistics } from './pages/Statistics/Statistics';
import TextBook from './pages/TextBook/TextBook';
import AboutTeam from './pages/AboutTeam/AboutTeam';
import Savannah from './pages/Savannah/Savannah';
>>>>>>> 9d85389... init
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
<<<<<<< HEAD
          <Route path={"/"} component={Main} exact />
          <Route path={"/mini-games"} component={MiniGames} exact />
          <Route path={"/audiocall"} component={AudioCall} exact />
          <Route path={"/settings"} component={Settings} exact />
          <Route path={"/statistics"} component={Statistics} exact />
          <Route path={"/text-book"} component={TextBook} exact />
          <Route path={"/about-team"} component={AboutTeam} exact />
          <Redirect to={"/"} />
=======
          <Route path={'/'} component={Main} exact />
          <Route path={'/mini-games'} component={MiniGames} exact />
          <Route path={'/settings'} component={Settings} exact />
          <Route path={'/statistics'} component={Statistics} exact />
          <Route path={'/text-book'} component={TextBook} exact />
          <Route path={'/about-team'} component={AboutTeam} exact />
          <Route path={'/savannah'} component={Savannah} exact />
          <Redirect to={'/'} />
>>>>>>> 9d85389... init
        </Switch>

        <Footer />
      </Router>
    </>
  );
};

export default App;
