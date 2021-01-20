import React from "react";
import "./Home.css";

import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

import EasyCards from "../Cards/EasyCards";
import MediumCards from "../Cards/MediumCards";
import HardCards from "../Cards/HardCards";

const Home = () => {
  return (
    <div className="home-page">
      <div className="homepage-header">
        <div className="col-md-11">
          <h6 className="xp-progressbar"> Fan Status</h6>
          <ProgressBar className="user-main-progressbar" animated now={45} />
        </div>
        <div className="col">
          {" "}
          <Link to="/userprofile">
            <button className="user-profile-btn" href=""></button>
          </Link>
        </div>
      </div>

      <div className="main-page-body">
        {/* TURN INTO COMPONENT */}
        <div className="">BEGINNER</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div>
        {/*  */}

        <div className="">BLOOMING ARTIST</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div>
        <div className="">BUSKER</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div>
        <div className="">LOCAL UPCOMER</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div>
        <div className="">LOCAL TALENT</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div>
        <div className="">LOCAL SUPERSTAR</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div>
        <div className="">PROVINCIAL TALENT</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div>
        <div className="">PROVINCIAL SENSATION</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div>
        <div className="">COUNTRY TALENT</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div>
      </div>
    </div>
  );
}

export default Home;
