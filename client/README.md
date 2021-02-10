<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/nikolaybutnik/star-academy">
    <img src="./client/src/Assets/staracademyIcon.png" alt="Logo" width="50" height="50">
  </a>

  <h3 align="center">STAR Academy</h3>

  <p align="center">
    Learn music the fun way
    <br />
    <a href="https://github.com/nikolaybutnik/star-academy"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://guarded-crag-12899.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/nikolaybutnik/star-academy/issues">Report Bug</a>
    ·
    <a href="https://github.com/nikolaybutnik/star-academy/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<img src="./client/src/Assets/star-academy-banner.png" alt="Home pages" width="100%" >

Ever wanted to learn guitar but found the process too daunting and unapproachable? We have you covered. STAR Academy is a web application that brings musical learning to you anywhere and everywhere. The app combines theory through randomized trivia quizzes, with user defined daily goals.

The philosophy behind STAR Academy is that of rewarding the user for learning. Thus, we have created a game-ified app that rewards the user simply for keeping up with their daily practice and studies by turning the act of learning into a game.

### Built With

The following technologies and libraries were used in the creation of STAR Academy:

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com)
- [Date-fns](https://date-fns.org/)
- [JSON Web Tokens](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [ProgressBar](https://react-bootstrap.github.io/components/progress/#progress-bar-props)
- [React-minimal-pie-chart](https://www.npmjs.com/package/react-minimal-pie-chart)
- [MongoDB](https://www.mongodb.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
- MongoDB

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/nikolaybutnik/star-academy
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Install MongoDB by following the [guide.](https://docs.mongodb.com/manual/installation/)

4. Inside MongoDB create a database called `musicplayground`, and two collections: `users` and `logs`.

5. You're ready to go!
   ```sh
   npm start
   ```

<!-- USAGE EXAMPLES -->

## Usage

After signing up for an account on logging in, the user is presented with the user profile screen.

<img src="./client/src/Assets/profile-page-legend.png" alt="Home pages" width="100%" >

The profile screen shows all basic user information.

- Band name: your very own custom band name.
- Level: the level of your virtual rock star. New questions get added to the quizzes as you level up.
- Energy: how many attempts you have left to do the quiz. For the current version of the app, 1 energy recovers every minute, but in a full production version this would change to 1 energy every hour.
- Experience bar: answer quiz questions and complete dailt goals to earn fans and level up.
- Class: a title reflecting your musical achievements.
- Tier picture: your profile picture that changes with your class as you level up.
- Total fans: how many fans (experience points) you've gained on your musical journey.
- Streak: consecutive days you've logged in.
- Wins/losses: a pie chart that tracks correct and incorrect quiz answers.
- Personal goals: Add daily goals and check them off to gain fans. Daily goals reset once per day at midnight.
- Go to quiz: go to the quiz page.
- Calendar: shows the current week. Current day is highlighted in yellow. If you have logged in on any previous days, those days will be highlighted in green.

The quiz page is where you spend energy to challenge your theory knowledge. Correct answers will earn fans based on the difficulty level.

<img src="./client/src/Assets/quiz-difficulty-level.png" alt="quiz difficulty level" width="60%">

Each attempt costs 1 energy point and comes with 5 randomly selected multiple choice questions. When you click on an answer, right answers are highlighted in green, and wrong answers are highlighted in red.

<img src="./client/src/Assets/example-question.png" alt="example question" width="60%">

New questions are added to the pool as you level up, so make sure to keep coming back and get more fans!

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/nikolaybutnik/star-academy/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Nikolay Butnik - [LinkedIn](https://www.linkedin.com/in/nikolay-butnik/) - btnk.nik@gmail.com

Louis Yacksmith - [LinkedIn](https://www.linkedin.com/in/louis-yacksmith-2a06321b2/) - louisyscarleton@gmail.com

Project Link: [https://github.com/nikolaybutnik/star-academy](https://github.com/nikolaybutnik/star-academy)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Choose an Open Source License](https://choosealicense.com)
- [Font Awesome](https://fontawesome.com)
- [Heroku](https://heroku.com)
