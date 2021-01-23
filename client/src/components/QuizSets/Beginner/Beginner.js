import React from "react";
import "./Beginner.css";
import wholeNoteIcon from "../../../Assets/icon2.png";
import halfNoteIcon from "../../../Assets/icon2 2.png";
import eighthNoteIcon from "../../../Assets/icon2 3.png";

import {
  beginnerEasyQuestions,
  beginnerMediumQuestions,
  beginnerHardQuestions,
} from "../../../utils/questions";
import QuestionDisplay from "../QuestionDisplay/QuestionDisplay";

const Beginner = ({
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
    setMediumBeginner([]);
    setHardBeginner([]);
    setEasyBusker([]);
    setMediumBusker([]);
    setHardBusker([]);
    setEasyLocalTalent([]);
    setMediumLocalTalent([]);
    setHardLocalTalent([]);
    //ADD LOGIC TO PREVENT DUPLICATE QUESTIONS
    const newArr = [];
    for (let i = 0; i < 5; i++) {
      const randNum = Math.random() * beginnerEasyQuestions.length;
      newArr.push(beginnerEasyQuestions[Math.floor(randNum)]);
    }
    setEasyBeginner(newArr);
  };

  const handleGoToQuizMedium = () => {
    setEasyBeginner([]);
    setHardBeginner([]);
    setEasyBusker([]);
    setMediumBusker([]);
    setHardBusker([]);
    setEasyLocalTalent([]);
    setMediumLocalTalent([]);
    setHardLocalTalent([]);
    //ADD LOGIC TO PREVENT DUPLICATE QUESTIONS
    const newArr = [];
    for (let i = 0; i < 5; i++) {
      const randNum = Math.random() * beginnerMediumQuestions.length;
      newArr.push(beginnerMediumQuestions[Math.floor(randNum)]);
    }
    setMediumBeginner(newArr);
  };

  const handleGoToQuizHard = () => {
    setEasyBeginner([]);
    setMediumBeginner([]);
    setEasyBusker([]);
    setMediumBusker([]);
    setHardBusker([]);
    setEasyLocalTalent([]);
    setMediumLocalTalent([]);
    setHardLocalTalent([]);
    //ADD LOGIC TO PREVENT DUPLICATE QUESTIONS
    const newArr = [];
    for (let i = 0; i < 5; i++) {
      const randNum = Math.random() * beginnerHardQuestions.length;
      newArr.push(beginnerHardQuestions[Math.floor(randNum)]);
    }
    setHardBeginner(newArr);
  };

  return (
    <>
      <div className="">BEGINNER</div>
      <div className="question-cards">
        <button
          className="card questions col-md-4"
          style={{
            width: "20.5rem",
            backgroundColor: "rgb(214 250 214)",
            borderColor: "green",
          }}
          onClick={() => handleGoToQuizEasy(beginnerEasyQuestions)}
        >
          <div className="col-md-12">
            <img
              src={wholeNoteIcon}
              alt="whole note"
              className="card-title"
              style={{ height: "40px", margin: "10px" }}
            />
          </div>
          <h5 className="card-title col-md-12">EASY</h5>
        </button>

        <button
          className="card questions col-md-4"
          style={{
            width: "20.5rem",
            backgroundColor: "rgb(255 225 144)",
            borderColor: "orange",
          }}
          onClick={() => handleGoToQuizMedium(beginnerMediumQuestions)}
        >
          <div className="col-md-12">
            <img
              src={halfNoteIcon}
              alt="half note"
              className="card-title"
              style={{ height: "40px", margin: "10px" }}
            />
          </div>
          <h5 className="card-title col-md-12">MEDIUM</h5>
        </button>

        <button
          className="card questions col-md-4"
          style={{
            width: "20.5rem",
            backgroundColor: "rgb(255, 131, 131)",
            borderColor: "darkred",
          }}
          onClick={() => handleGoToQuizHard(beginnerHardQuestions)}
        >
          <div className="col-md-12">
            <img
              src={eighthNoteIcon}
              alt="eighth note"
              className="card-title"
              style={{ height: "40px", margin: "10px" }}
            />
          </div>
          <h5 className="card-title col-md-12">HARD</h5>
        </button>
      </div>

      <div id="EasyQuestions" className="d-flex">
        {easyBeginner.map((question) => (
          <QuestionDisplay quiz={question} />
        ))}
      </div>
      <div id="MediumQuestions" className="d-flex">
        {mediumBeginner.map((question) => (
          <QuestionDisplay quiz={question} />
        ))}
      </div>
      <div id="HardQuestions" className="d-flex">
        {hardBeginner.map((question) => (
          <QuestionDisplay quiz={question} />
        ))}
      </div>
    </>
  );
};

export default Beginner;
