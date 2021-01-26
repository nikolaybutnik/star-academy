import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../../utils/UserContext";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./Quiz.css";

import Beginner from "./QuizSets/Beginner/Beginner";
import Busker from "./QuizSets/Busker/Busker";
import LocalTalent from "./QuizSets/LocalTalent/LocalTalent";
import HomeHeader from "../../Header/HomeHeader";

const Quiz = () => {
  // Currently logged in user
  const user = useContext(UserContext);

  // Check if user has previosuly logged in when page loads.
  useEffect(() => {
    // On page render, check if user context exists. If not, check if user
    // id exists in local storage. If yes, fetch user object. if not, redirect.
  }, []);

  const [easyBeginner, setEasyBeginner] = useState([]);
  const [mediumBeginner, setMediumBeginner] = useState([]);
  const [hardBeginner, setHardBeginner] = useState([]);

  const [easyBusker, setEasyBusker] = useState([]);
  const [mediumBusker, setMediumBusker] = useState([]);
  const [hardBusker, setHardBusker] = useState([]);

  const [easyLocalTalent, setEasyLocalTalent] = useState([]);
  const [mediumLocalTalent, setMediumLocalTalent] = useState([]);
  const [hardLocalTalent, setHardLocalTalent] = useState([]);

  if (!user) {
    return <Redirect to="/" />;
  }

  const props = {
    easyBeginner,
    setEasyBeginner,
    mediumBeginner,
    setMediumBeginner,
    hardBeginner,
    setHardBeginner,
    easyBusker,
    setEasyBusker,
    mediumBusker,
    setMediumBusker,
    hardBusker,
    setHardBusker,
    easyLocalTalent,
    setEasyLocalTalent,
    mediumLocalTalent,
    setMediumLocalTalent,
    hardLocalTalent,
    setHardLocalTalent,
  };

  return (
    <div className="home-page">
      <HomeHeader />

      <div className="main-page-body">
        <Beginner props={props} />

        {/* <div className="">BLOOMING ARTIST</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}

        <Busker props={props} />

        {/* <div className="">LOCAL UPCOMER</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}

        <LocalTalent props={props} />

        {/* <div className="">LOCAL SUPERSTAR</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}

        {/* <div className="">PROVINCIAL TALENT</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}

        {/* <div className="">PROVINCIAL SENSATION</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}

        {/* <div className="">COUNTRY TALENT</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}
      </div>
    </div>
  );
};

export default Quiz;
