import questions from './questions.json'

const quizContainer = document.getElementById('answersContainer')
const question = document.getElementById('question')
const check = document.getElementById('checkButton')
let questionIndex = 0
let answerIndex = null

function initializeUI() {
  question.innerText = questions[questionIndex].question
}

function setAnswer(evt) {
  answerIndex = parseInt(evt.currentTarget.dataset.index) 
}

function createAnswers() {
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
  } else {
    alert('incorrect!')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initializeUI()
  createAnswers()
  check.addEventListener('click', validateAnswer)
})





