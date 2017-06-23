var button = document.querySelector('button')
var body = document.querySelector('body')

function changeColor () {
  body.style.backgroundColor = colorChanger()
}

function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function colorChanger () {
  var r = randomFn(0, 255)
  var g = randomFn(0, 255)
  var b = randomFn(0, 255)
  var o = Math.random()

  // rgba(5, 38, 96, 1)
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + o + ')'
}

button.addEventListener('click', function () {
  // setTimeout(afterTimeout, 5000)
  setInterval(changeColor, 4000)
})
