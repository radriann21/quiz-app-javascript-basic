import questions from './questions.json'

// DOM Elements to use
const quizContainer = document.getElementById('answersContainer')
const correctAnswersNumber = document.getElementById('correct')
const question = document.getElementById('question')
const check = document.getElementById('checkButton')


let questionIndex = 0 // actual question
let answerIndex = 0 // index of the selected answer
let correctAnswers = 0 // number of correct answers

// reset button
const resetButton = document.createElement('button')
resetButton.classList.add('check')
resetButton.innerText = 'Reset'
resetButton.addEventListener('click', () => {
  window.location.reload()
})

function win() {
  quizContainer.innerHTML = ''

  const message = document.createElement('h2')
  message.innerText = 'You win!'
  quizContainer.appendChild(message)
  quizContainer.appendChild(resetButton)
}

function lose() {
  quizContainer.innerHTML = ''

  const message = document.createElement('h2')
  message.innerText = 'You Lose!'
  quizContainer.appendChild(message)
  quizContainer.appendChild(resetButton)
}

function initializeUI() {
  if (questionIndex === 10) {
    if (correctAnswers >= 7) {
      win()
    } else if (correctAnswers < 7) {
      lose()
    }
  }

  question.innerText = questions[questionIndex].question
  correctAnswersNumber.innerText = correctAnswers
}

function setAnswer(evt) {
  const element = evt.currentTarget
  element.classList.toggle('selected')
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
    alert('Correct!')
    correctAnswers++
  } else {
    alert('Incorrect!')
  }

  questionIndex++

  if (questionIndex < questions.length) {
    answerIndex = null 
    initializeUI()
    createAnswers()
  } else {
    if (correctAnswers >= 7) {
      win()
      check.remove()
    } else {
      lose()
      check.remove()
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  check.addEventListener('click', validateAnswer)
  initializeUI()
  createAnswers()
})





