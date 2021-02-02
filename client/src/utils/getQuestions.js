/* eslint-disable no-unused-vars */
import React from 'react'
import randomstring from 'randomstring'

import { beginnerEasyQuestions } from './QuestionSets/Beginner/beginnerEasyQ'
import { beginnerMediumQuestions } from './QuestionSets/Beginner/beginnerMediumQ'
import { beginnerHardQuestions } from './QuestionSets/Beginner/beginnerHardQ'
import { buskerEasyQuestions } from './QuestionSets/Busker/buskerEasyQ'
import { buskerMediumQuestions } from './QuestionSets/Busker/buskerMediumQ'
import { buskerHardQuestions } from './QuestionSets/Busker/buskerHardQ'
import { localTalentEasyQuestions } from './QuestionSets/LocalTalent/localTalentEasyQ'
import { localTalentMediumQuestions } from './QuestionSets/LocalTalent/localTalentMediumQ'
import { localTalentHardQuestions } from './QuestionSets/LocalTalent/localTalentHardQ'

const getQuestions = (difficulty, user) => {
  // Choose the appropriate question set based on user level/class
  let questionSet = []
  if (difficulty === 'easy') {
    switch (user.class) {
      case 'Beginner':
        questionSet = beginnerEasyQuestions
        break
      case 'Busker':
        questionSet = buskerEasyQuestions
        break
      case 'Local Talent':
        questionSet = localTalentEasyQuestions
        break
      default:
        questionSet = localTalentEasyQuestions
    }
  } else if (difficulty === 'medium') {
    switch (user.class) {
      case 'Beginner':
        questionSet = beginnerMediumQuestions
        break
      case 'Busker':
        questionSet = buskerMediumQuestions
        break
      case 'Local Talent':
        questionSet = localTalentMediumQuestions
        break
      default:
        questionSet = localTalentMediumQuestions
    }
  } else if (difficulty === 'hard') {
    switch (user.class) {
      case 'Beginner':
        questionSet = beginnerHardQuestions
        break
      case 'Busker':
        questionSet = buskerHardQuestions
        break
      case 'Local Talent':
        questionSet = localTalentHardQuestions
        break
      default:
        questionSet = localTalentHardQuestions
    }
  }

  // Make new question array and prevent duplicate questions
  const newArr = []
  while (newArr.length < 5) {
    const randNum = Math.floor(Math.random() * questionSet.length)
    const nextQuestion = questionSet[randNum]
    if (
      newArr
        .map((q) => {
          return q.id
        })
        .includes(nextQuestion.id)
    ) {
      continue
    }
    newArr.push(nextQuestion)
  }
  const questionsArr = newArr.map((q) => {
    return { ...q, key: randomstring.generate(10) }
  })
  return questionsArr
}

export default getQuestions
