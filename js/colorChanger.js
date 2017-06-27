var button = document.querySelector('button')
var body = document.querySelector('body')
var colors = ['red', 'green', 'blue', 'yellow']
var score = 0
var scoreText = document.querySelector('#score')
var yayText = document.querySelector('#yay')
scoreText.textContent = 'score: ' + score

var colorText = document.querySelector('#colortext')

function changeColorText () {
  colorText.textContent = colorChanger()
  colorText.style.color = colorChanger()
}

function changeColor () {
  body.style.backgroundColor = colorChanger()
}


function newGame () {
  changeColorText ()
  changeColor ()
}


function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function colorChanger () {
  // var r = randomFn(0, 255)
  // var g = randomFn(0, 255)
  // var b = randomFn(0, 255)
  // var o = Math.random()

  // rgba(5, 38, 96, 1)
  var randomiseColor = colors[randomFn(0, 3)]
  return randomiseColor
}

setInterval(newGame, 1500)

button.addEventListener('click', function () {
  // setTimeout(afterTimeout, 5000)
  if (body.style.backgroundColor === colorText.textContent) {
    score += 1
    scoreText.textContent = 'score: ' + score
    yayText.style.opacity = "1"
    yayText.textContent = 'YAY!'
  } else {
    yayText.textContent = 'NAY!'
    yayText.style.opacity = "1"
  }
})
