import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import beginner from "../../Assets/512x512.png";

const ProfileUserTier = () => {
  return (
    <div className="col-md-5">
      <h1 className="user-level">BEGINNER</h1>
      <img
        src={beginner}
        alt="beginner logo"
        className="user-image-profile col-md-12"
      />
      <ProgressBar now={40} variant="warning" className="exhaustion-level" />
      <h5 className="exhaustion-level-title">Exhaustion Level</h5>
    </div>
  );
};

export default ProfileUserTier;
