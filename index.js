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

var quiz = document.getElementbyID('quiz')
var score = 0
const startButton = document.getElementbyID('start-quiz')

startButton.addEventListener ('click', startGame)


function startGame() {
  console.log('Started')
  startButton.cla

  
  for(var i = 0; i < questionsArr.length; i++){
    var answer = window.prompt(questionsArr[i].prompt)
    if(answer === questionsArr[i].answer){
    score++
    } else {

    }
  }
  
  var finalscore = Math.round(score / questionsArr.length * 100)
  
  alert("Your score was " + finalscore + '%')
  
  }

