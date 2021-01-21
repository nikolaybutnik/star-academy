import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <div className="homepage-header">
      <div className="col-md-11">
        <h6 className="xp-progressbar"> Fan Status</h6>
        <ProgressBar
          className="user-main-progressbar"
          animated
          now={45}
          style={{ height: "2rem" }}
        />
      </div>
      <h6 style={{ marginTop: "55px" }}>+10</h6>
      <div className="col">
        {" "}
        <Link to="/userprofile">
          <button className="user-profile-btn" href=""></button>
        </Link>
      </div>
    </div>
  );
}

export default HomeHeader;
