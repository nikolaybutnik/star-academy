import React from "react";

import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

import home from "../../Assets/home.png";
import beginner from "../../Assets/512x512.png";
import "./UserProfile.css";
import { PieChart } from "react-minimal-pie-chart";

const UserProfile = () => {
  return (
    <div className="home-page">
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
          <Link to="/home">
            <button className="user-profile-btn" href="">
              <img
                src={home}
                alt="home button"
                style={{
                  maxHeight: "25px",
                  maxWidth: "25px",
                }}
              />
            </button>
          </Link>
        </div>
      </div>

      <div className="main-page-body">
        <div className="row">
          <div className="col-md-5">
            <h1 className="user-level">BEGINNER</h1>
            <img
              src={beginner}
              alt="beginner logo"
              className="user-image-profile col-md-12"
            />
            <ProgressBar
              now={40}
              variant="warning"
              className="exhaustion-level"
            />
            <h5 className="exhaustion-level-title">Exhaustion Level</h5>
          </div>
          <div className="col-md-7">
            <div
              className="row col-md-12"
              style={{ flexWrap: "nowrap", marginTop: "70px" }}
            >
              <div className="col-md-6">
                <PieChart
                  data={[
                    { title: "One", value: 10, color: "#E38627" },
                    { title: "Two", value: 15, color: "#C13C37" },
                    { title: "Three", value: 20, color: "#6A2135" },
                  ]}
                  style={{ height: "auto", maxHeight: "250px", margin: "20px" }}
                />
              </div>

              <div className="col-md-6">
                {" "}
                {/* <PieChart
                  data={[
                    { title: "One", value: 10, color: "#E38627" },
                    { title: "Two", value: 15, color: "#C13C37" },
                    { title: "Three", value: 20, color: "#6A2135" },
                  ]}
                  style={{ height: "auto", maxHeight: "250px", margin: "20px" }}
                /> */}
                <form
                  style={{ height: "auto", maxHeight: "250px", margin: "20px" }}
                >
                  <h6>Username:</h6>
                  <h6>Email: </h6>
                  <h6>Streak: </h6>
                  <h6>Birthday: </h6>
                  <h6>Joined Date: </h6>
                </form>
              </div>
            </div>

            <div class="calendar">
              <div class="outer">
                <table>
                  <thead>
                    <tr>
                      <th>SUN</th>
                      <th>MON</th>
                      <th>TUE</th>
                      <th>WED</th>
                      <th>THUR</th>
                      <th class="secondary">FRI</th>
                      <th class="secondary">SAT</th>
                    </tr>
                  </thead>
                </table>

                <div class="wrap">
                  <table>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
