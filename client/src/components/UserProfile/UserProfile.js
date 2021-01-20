import React from "react";

import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

import logo from "../../Assets/icon1 2.png";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="home-page">
      <div className="homepage-header">
        <div className="col-md-11">
          <h6 className="xp-progressbar"> Fan Status</h6>
          <ProgressBar className="user-main-progressbar" animated now={45} />
        </div>
        <div className="col">
          {" "}
          <Link to="/home">
            <button className="user-profile-btn" href=""></button>
          </Link>
        </div>
      </div>

      <div className="main-page-body">
        {/* <div className="row">
          <div className="col-md-4">
            <img
              src={logo}
              alt="logo"
              className="user-image-profile col-md-12"
            />
            <h1 className="user-level">LOCAL TALENT</h1>
            <ProgressBar
              now={10}
              variant="warning"
              className="exhaustion-level"
            />
            <h5 className="exhaustion-level-title">Exhaustion Level</h5>
          </div>
          <div className="col-md-8">
            <img
              src={logo}
              alt="logo"
              className="user-image-profile col-md-12"
            />
            <h1 className="user-level">LOCAL TALENT</h1>
            <ProgressBar
              now={10}
              variant="warning"
              className="exhaustion-level"
            />
            <h5 className="exhaustion-level-title">Exhaustion Level</h5>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default UserProfile;
