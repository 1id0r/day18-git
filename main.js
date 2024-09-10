'use strict'

function onBallClick() {
  const elBall = document.querySelector('.ball')
  var currWidth = elBall.offsetWidth
  var currHeight = elBall.offsetHeight
  if (currWidth > 400) {
    currWidth = 50
    currHeight = 50
  }
  var newHeight = currHeight + 50
  var newWidth = currWidth + 50
  elBall.style.height = newHeight + 'px'
  elBall.style.width = newWidth + 'px'
  elBall.innerText = newHeight
}
