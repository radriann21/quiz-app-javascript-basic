import questions from './questions.json'

// DOM Elements to use
const quizContainer = document.getElementById('answersContainer')
const correctAnswersNumber = document.getElementById('correct')
const question = document.getElementById('question')
const check = document.getElementById('checkButton')


let questionIndex = 0 // actual question
let answerIndex = null // index of the selected answer
let correctAnswers = 0 // number of correct answers


function initializeUI() {
  question.innerText = questions[questionIndex].question
  correctAnswersNumber.innerText = correctAnswers
}

function setAnswer(evt) {
  const element = evt.currentTarget
  answerIndex = parseInt(element.dataset.index)
}

function createAnswers() {
  quizContainer.innerHTML = ''

  const answers = questions[questionIndex].answers 
  answers.forEach((answer, index) => {
  const answerElement = document.createElement('article')
  answerElement.setAttribute('id', 'question')
  answerElement.setAttribute('data-index', index)
  answerElement.addEventListener('click', setAnswer)

  const answerText = document.createElement('p')
  answerText.innerText = answer
  answerElement.appendChild(answerText)

  quizContainer.appendChild(answerElement)
  })
}

function validateAnswer() {  
  if (questions[questionIndex].correct_answer === answerIndex) {
    alert('correct!')
    correctAnswers++
    questionIndex++
    answerIndex = 0
    initializeUI()
    createAnswers()
  } else {
    alert('incorrect!')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initializeUI()
  createAnswers()
  check.addEventListener('click', validateAnswer)
})





