<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
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

[Star Academy Screen Shot](https://github.com/nikolaybutnik/star-academy/blob/main/client/src/assets/star-academy-banner.png?raw=true)

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

[Profile page Screen Shot](https://github.com/nikolaybutnik/star-academy/blob/main/client/src/assets/profile-page-legend.png?raw=true)

The profile screen shows all basic user information.

- Band name: your very own custom band name.
- Level: the level of your virtual rock star. New questions get added to the quizes as you level up.
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

[Quiz Difficulty Level Screen Shot](https://github.com/nikolaybutnik/star-academy/blob/main/client/src/assets/quiz-difficulty-level.png?raw=true)

Each attempt costs 1 energy point and comes with 5 randomly selected multiple choice questions. When you click on an answer, right answers are highlighted in green, and wrong answers are highlighted in red.

[Example Question Screen Shot](https://github.com/nikolaybutnik/star-academy/blob/main/client/src/assets/example-question.png?raw=true)

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

Nikolay Butnik - [LinkedIn](https://www.linkedin.com/in/nikolay-b-2887971b7/) - btnk.nik@gmail.com

Louis Yacksmith - [LinkedIn](https://www.linkedin.com/in/louis-yacksmith-2a06321b2/)

Project Link: [https://github.com/nikolaybutnik/star-academy](https://github.com/nikolaybutnik/star-academy)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Choose an Open Source License](https://choosealicense.com)
- [Font Awesome](https://fontawesome.com)
- [Heroku](https://heroku.com)
<!-- - [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Animate.css](https://daneden.github.io/animate.css)
- [Loaders.css](https://connoratherton.com/loaders)
- [Slick Carousel](https://kenwheeler.github.io/slick)
- [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
- [Sticky Kit](http://leafo.net/sticky-kit)
- [JVectorMap](http://jvectormap.com) -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- [contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/nikolaybutnik/star-academy/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/nikolaybutnik/star-academy/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/nikolay-b-2887971b7/
[product-screenshot]: images/screenshot.png -->
