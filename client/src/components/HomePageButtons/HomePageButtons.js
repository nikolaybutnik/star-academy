import React from "react";
import { Link } from "react-router-dom";

const HomePageButtons = () => {
  return (
    <Link to="/home">
      <button
        className="user-home-btn col-md-12"
        href=""
        style={{
          margin: "auto",
          marginTop: "100px",
          marginBottom: "30px",
          borderRadius: "0%",
          backgroundColor: "lightblue",
          borderWidth: "3px",
          border: "grey solid thin",
        }}
      >
        <h2 style={{ padding: "5px" }}>DAILY QUIZ</h2>
      </button>
      <div>hello</div>
    </Link>
  );
};

export default HomePageButtons;
