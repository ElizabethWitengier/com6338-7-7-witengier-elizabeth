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

var quizContainer = document.getElementById('quiz')
var score = 0
var currentQuestion = 0
var timeRemaining
var timerId

quizContainer.onclick = function(e) {
  if(e.target.id === 'start-quiz'){
    drawQuestion()
  } else if (e.target.parentElement.id === 'choices' && e.target.tagName === 'BUTTON') {
    if(e.target.textContent === questionsArr[currentQuestion].answer){
      score++
    }
    clearInterval(timerId)
    currentQuestion++

    if(currentQuestion < questionsArr.length) {
      drawQuestion()
    } else {
      endGame()
    }
  }
}

function drawGameStart() {
  score = 0
  currentQuestion = 0
  quizContainer.innerHTML = ""
  var previousScore = localStorage.getItem('previous-score')

  if(previousScore) {
    var previousScoreE1 = document.createElement('p')
    previousScoreE1.textContent = 'Previous Score: ' + previousScore
    quizContainer.appendChild(previousScoreE1)
  }

  var startBtn = document.createElement('button')
  startBtn.id = 'start-quiz'
  startBtn.textContent = "Start Quiz!"
  quizContainer.appendChild(startBtn)
}

function drawQuestion() {
  var questionObj = questionsArr[currentQuestion]
  quizContainer.innerHTML= ""

  var questionTextE1 = document.createElement('p')
  questionTextE1.textContent = questionObj.question
  quizContainer.appendChild(questionTextE1)

  var choicesContainer = document.createElement('div')
  choicesContainer.id = 'choices'
  quizContainer.appendChild(choicesContainer)

  questionObj.options.forEach(function(choice) {
    var btn = document.createElement('button')
    btn.textContent = choice
    choicesContainer.appendChild(btn)
  })

  timeRemaining = 30
  var timerE1 = document.createElement('p')
  timerE1.id = 'timer'
  timerE1.textContent = timeRemaining
  quizContainer.appendChild(timerE1)

  startTimer()
}

function startTimer() {
  var timerE1 = document.getElementById('timer')
  
  timerId = setInterval(function() {
    timeRemaining--
    if (timeRemaining >= 0) {
        timerE1.textContent = timeRemaining
    } else {
      clearInterval(timerId)

      currentQuestion++

      if(currentQuestion < questionsArr.length) {
        drawQuestion()
      } else {
        endGame()
      }
    }
  }, 1000)
}

function endGame() {
  quizContainer.innerHTML = ""

  var percentage = Math.round(score / questionsArr.length * 100) + "%"
  localStorage.setItem('previous-score', percentage)
  drawGameStart()
}

drawGameStart()
  