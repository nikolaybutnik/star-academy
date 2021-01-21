import React, { useState } from 'react'
import './Home.css'

import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link } from 'react-router-dom'

import Beginner from '../../components/QuizSets/Beginner/Beginner'
import Busker from '../../components/QuizSets/Busker/Busker'
import LocalTalent from '../../components/QuizSets/LocalTalent/LocalTalent'

const Home = () => {
  const [easyBeginner, setEasyBeginner] = useState([])
  const [mediumBeginner, setMediumBeginner] = useState([])
  const [hardBeginner, setHardBeginner] = useState([])

  const [easyBusker, setEasyBusker] = useState([])
  const [mediumBusker, setMediumBusker] = useState([])
  const [hardBusker, setHardBusker] = useState([])

  const [easyLocalTalent, setEasyLocalTalent] = useState([])
  const [mediumLocalTalent, setMediumLocalTalent] = useState([])
  const [hardLocalTalent, setHardLocalTalent] = useState([])

  const props = {
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
  }

  return (
    <div className="home-page">
      <div className="homepage-header">
        <div className="col-md-11">
          <h6 className="xp-progressbar"> Fan Status</h6>
          <ProgressBar className="user-main-progressbar" animated now={45} />
        </div>
        <div className="col">
          {' '}
          <Link to="/userprofile">
            <button className="user-profile-btn" href=""></button>
          </Link>
        </div>
      </div>

      <div className="main-page-body">
        <Beginner props={props} />

        {/* <div className="">BLOOMING ARTIST</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}

        <Busker props={props} />

        {/* <div className="">LOCAL UPCOMER</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}

        <LocalTalent props={props} />

        {/* <div className="">LOCAL SUPERSTAR</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}

        {/* <div className="">PROVINCIAL TALENT</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}

        {/* <div className="">PROVINCIAL SENSATION</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}

        {/* <div className="">COUNTRY TALENT</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}
      </div>
    </div>
  )
}

export default Home
