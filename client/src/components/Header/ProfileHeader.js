import React from "react";
import "./Header.css";
import home from "../../Assets/home.png";
import ProgressBar from "react-bootstrap/ProgressBar";

function ProfileHeader() {
  return (
    <div className="homepage-header">
      <div className="col-md-11">
        <h6 className="xp-progressbar"> Fan Status</h6>
        <ProgressBar
          className="user-main-progressbar"
          animated
          now={75}
          style={{ height: "2rem" }}
        />
      </div>
      <h6 style={{ marginTop: "55px" }}>+10</h6>
      <div className="col">
        {" "}
        <button className="user-profile-btn" href="">
          <img
            src={home}
            alt="home button"
            style={{
              maxHeight: "25px",
              maxWidth: "25px",
              opacity: "30%",
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;
