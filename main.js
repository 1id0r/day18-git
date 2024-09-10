'use strict'

function onBallClick() {
  const elBall = document.querySelector('.ball')
  var currWidth = elBall.offsetWidth
  var currHeight = elBall.offsetHeight
  if (currWidth > 400) {
    currWidth = 50
    currHeight = 50
  }
  var randomSize = getRandomInt(20, 60)
  var newHeight = currHeight + randomSize
  var newWidth = currWidth + randomSize
  elBall.style.height = newHeight + 'px'
  elBall.style.width = newWidth + 'px'
  elBall.innerText = newHeight
}
