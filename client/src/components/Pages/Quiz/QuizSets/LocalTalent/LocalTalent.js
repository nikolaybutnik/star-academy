import React from "react";
import "./LocalTalent.css";
import {
  localTalentEasyQuestions,
  localTalentMediumQuestions,
  localTalentHardQuestions,
} from "../../../../../utils/questions";
import QuestionDisplay from "../QuestionDisplay/QuestionDisplay";

import wholeNoteIcon from "../../../../../Assets/icon2.png";
import halfNoteIcon from "../../../../../Assets/icon2 2.png";
import eighthNoteIcon from "../../../../../Assets/icon2 3.png";

const LocalTalent = ({
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
    setEasyBusker([]);
    setMediumBusker([]);
    setHardBusker([]);
    setMediumLocalTalent([]);
    setHardLocalTalent([]);
    //ADD LOGIC TO PREVENT DUPLICATE QUESTIONS
    const newArr = [];
    for (let i = 0; i < 5; i++) {
      const randNum = Math.random() * localTalentEasyQuestions.length;
      newArr.push(localTalentEasyQuestions[Math.floor(randNum)]);
    }
    setEasyLocalTalent(newArr);
  };

  const handleGoToQuizMedium = () => {
    setEasyBeginner([]);
    setMediumBeginner([]);
    setHardBeginner([]);
    setEasyBusker([]);
    setMediumBusker([]);
    setHardBusker([]);
    setEasyLocalTalent([]);
    setHardLocalTalent([]);
    //ADD LOGIC TO PREVENT DUPLICATE QUESTIONS
    const newArr = [];
    for (let i = 0; i < 5; i++) {
      const randNum = Math.random() * localTalentMediumQuestions.length;
      newArr.push(localTalentMediumQuestions[Math.floor(randNum)]);
    }
    setMediumLocalTalent(newArr);
  };

  const handleGoToQuizHard = () => {
    setEasyBeginner([]);
    setMediumBeginner([]);
    setHardBeginner([]);
    setEasyBusker([]);
    setMediumBusker([]);
    setHardBusker([]);
    setEasyLocalTalent([]);
    setMediumLocalTalent([]);
    //ADD LOGIC TO PREVENT DUPLICATE QUESTIONS
    const newArr = [];
    for (let i = 0; i < 5; i++) {
      const randNum = Math.random() * localTalentHardQuestions.length;
      newArr.push(localTalentHardQuestions[Math.floor(randNum)]);
    }
    setHardLocalTalent(newArr);
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
          onClick={() => handleGoToQuizEasy(localTalentEasyQuestions)}
        >
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
          onClick={() => handleGoToQuizMedium(localTalentMediumQuestions)}
        >
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
          onClick={() => handleGoToQuizHard(localTalentHardQuestions)}
        >
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
        {easyLocalTalent.map((question) => (
          <QuestionDisplay quiz={question} />
        ))}
      </div>
      <div id="MediumQuestions" className="d-flex">
        {mediumLocalTalent.map((question) => (
          <QuestionDisplay quiz={question} />
        ))}
      </div>
      <div id="HardQuestions" className="d-flex">
        {hardLocalTalent.map((question) => (
          <QuestionDisplay quiz={question} />
        ))}
      </div>
    </>
  );
};

export default LocalTalent;
