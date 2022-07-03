var questionsArr = [
  {
    question: 'Where was the first celebration of Independence Day held?',
    answer: 'Philadelphia',
    options: [
      'Philadelphia',
      'New York City',
      'Washington DC',
      'Boston',
    ]
  },
  {
    question: 'Every Independence Day, how many times does the Liberty Bell ring?',
    answer: '13',
    options: [
      '13',
      '50',
      '25',
      '4',
    ]
  },
  {
    question: 'What was the estimated population of the United States on July 4, 1776?',
    answer: '2.5 million',
    options: [
      '2.5 million',
      '1 million',
      '12.5 million',
      '125 million',
    ]
  },
  {
    question: 'Which president of the United States was the first to host a Fourth of July celebration at the White House?',
    answer: 'Thomas Jefferson',
    options: [
      'Thomas Jefferson',
      'Benjamin Franklin',
      'George Washington',
      'John Adams',
    ] 
  },
  {
    question: 'Every July 4th, what food is most commonly consumed?',
    answer: 'Hot Dogs',
    options: [
      'Hot Dogs',
      'BBQ Chicken',
      'Pizza',
      'Macaroni Salad',
    ]
  },
]

var quiz = document.getElementById('quiz')
var score = 0
var startButton = document.getElementById('start-quiz')
var h2 = document.querySelector('h2')
var answerInput = localStorage.getItem('ANSWER')

startButton.onclick = startQuiz

function startQuiz() {
  startButton.classList.add('hide')
  quiz.classList.remove('hide')
  questionsArr = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  setNextQuestion()

  var intervalID = setInterval(function() {
  var seconds = Number(h2.textContent) -1
    if(seconds === -1) {
      clearInterval(intervalID)
      h2.textContent = "Refresh to go again"
      setTimeout(function() {
      } , 3000)
    } else {
      h2.textContent = seconds
    }
  } , 3000)
}

function setNextQuestion(question) {
  showQuestion(questionsArr)
}

function showQuestion()
