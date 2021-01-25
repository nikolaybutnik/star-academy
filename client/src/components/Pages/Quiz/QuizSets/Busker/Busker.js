import React from "react";
import "./Busker.css";
import {
  buskerEasyQuestions,
  buskerMediumQuestions,
  buskerHardQuestions,
} from "../../../../../utils/questions";
import QuestionDisplay from "../QuestionDisplay/QuestionDisplay";

import wholeNoteIcon from "../../../../../Assets/icon2.png";
import halfNoteIcon from "../../../../../Assets/icon2 2.png";
import eighthNoteIcon from "../../../../../Assets/icon2 3.png";

const Busker = ({
  props: {
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
  },
}) => {
  const handleGoToQuizEasy = () => {
    setEasyBeginner([]);
    setMediumBeginner([]);
    setHardBeginner([]);
    setMediumBusker([]);
    setHardBusker([]);
    setEasyLocalTalent([]);
    setMediumLocalTalent([]);
    setHardLocalTalent([]);
    //ADD LOGIC TO PREVENT DUPLICATE QUESTIONS
    const newArr = [];
    for (let i = 0; i < 5; i++) {
      const randNum = Math.random() * buskerEasyQuestions.length;
      newArr.push(buskerEasyQuestions[Math.floor(randNum)]);
    }
    setEasyBusker(newArr);
  };

  const handleGoToQuizMedium = () => {
    setEasyBeginner([]);
    setMediumBeginner([]);
    setHardBeginner([]);
    setEasyBusker([]);
    setHardBusker([]);
    setEasyLocalTalent([]);
    setMediumLocalTalent([]);
    setHardLocalTalent([]);
    //ADD LOGIC TO PREVENT DUPLICATE QUESTIONS
    const newArr = [];
    for (let i = 0; i < 5; i++) {
      const randNum = Math.random() * buskerMediumQuestions.length;
      newArr.push(buskerMediumQuestions[Math.floor(randNum)]);
    }
    setMediumBusker(newArr);
  };

  const handleGoToQuizHard = () => {
    setEasyBeginner([]);
    setMediumBeginner([]);
    setHardBeginner([]);
    setEasyBusker([]);
    setMediumBusker([]);
    setEasyLocalTalent([]);
    setMediumLocalTalent([]);
    setHardLocalTalent([]);
    //ADD LOGIC TO PREVENT DUPLICATE QUESTIONS
    const newArr = [];
    for (let i = 0; i < 5; i++) {
      const randNum = Math.random() * buskerHardQuestions.length;
      newArr.push(buskerHardQuestions[Math.floor(randNum)]);
    }
    setHardBusker(newArr);
  };

  return (
    <>
      <div className="">BUSKER</div>
      <div className="question-cards">
        <button
          className="card questions col-md-4"
          style={{
            width: "20.5rem",
            backgroundColor: "rgb(245 255 245)",
            borderColor: "rgb(3 184 3)",
            borderWidth: "3px",
            margin: "10px",
            marginLeft: "-5px",
            marginRight: "0px",
          }}
          onClick={() => handleGoToQuizEasy(buskerEasyQuestions)}
        >
          {/* <h5 className="card-title col-md-12">EASY</h5> */}
          <div className="col-md-12">
            <img
              src={wholeNoteIcon}
              alt="whole note"
              className="card-title"
              style={{ height: "40px", margin: "10px" }}
            />
          </div>
        </button>

        <button
          className="card questions col-md-4"
          style={{
            width: "20.5rem",
            backgroundColor: "rgb(255 248 228)",
            borderColor: "orange",
            borderWidth: "3px",
            margin: "10px",
            marginLeft: "5px",
            marginRight: "5px",
          }}
          onClick={() => handleGoToQuizMedium(buskerMediumQuestions)}
        >
          {/* <h5 className="card-title col-md-12">MEDIUM</h5> */}
          <div className="col-md-12">
            <img
              src={halfNoteIcon}
              alt="half note"
              className="card-title"
              style={{ height: "40px", margin: "10px" }}
            />
          </div>
        </button>

        <button
          className="card questions col-md-4"
          style={{
            width: "20.5rem",
            backgroundColor: "rgb(255 223 223)",
            borderColor: "#e90202",
            borderWidth: "3px",
            margin: "10px",
            marginLeft: "0px",
            marginRight: "0px",
          }}
          onClick={() => handleGoToQuizHard(buskerHardQuestions)}
        >
          {/* <h5 className="card-title col-md-12">HARD</h5> */}
          <div className="col-md-12">
            <img
              src={eighthNoteIcon}
              alt="eighth note"
              className="card-title"
              style={{ height: "40px", margin: "10px" }}
            />
          </div>
        </button>
      </div>

      <div id="EasyQuestions" className="d-flex">
        {easyBusker.map((question) => (
          <QuestionDisplay quiz={question} />
        ))}
      </div>
      <div id="MediumQuestions" className="d-flex">
        {mediumBusker.map((question) => (
          <QuestionDisplay quiz={question} />
        ))}
      </div>
      <div id="HardQuestions" className="d-flex">
        {hardBusker.map((question) => (
          <QuestionDisplay quiz={question} />
        ))}
      </div>
    </>
  );
};

export default Busker;
