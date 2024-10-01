import questions from './questions.json'

const quizContainer = document.getElementById('answersContainer')
const question = document.getElementById('question')
const check = document.getElementById('checkButton')
let questionIndex = 0

question.innerText = questions[questionIndex].question

const answers = questions[questionIndex].answers 
answers.forEach((answer, index) => {
  const answerElement = document.createElement('article')
  answerElement.setAttribute('id', 'question')
  answerElement.setAttribute('data-index', index)
  const answerText = document.createElement('p')
  answerText.innerText = answer
  answerElement.appendChild(answerText)
  quizContainer.appendChild(answerElement)
})






