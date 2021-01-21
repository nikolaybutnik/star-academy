import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import homeicon from "../../Assets/user-avatar.png";

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
          <button className="user-profile-btn" href="">
            <img
              src={homeicon}
              alt="home icon"
              style={{
                maxHeight: "25px",
                maxWidth: "25px",
              }}
            ></img>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeHeader;
