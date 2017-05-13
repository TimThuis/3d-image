const title = document.querySelector('h1');
const elements = document.querySelectorAll('.element')
const back = elements[0];
const middleBack = elements[1];
const middleFront = elements[2];
const front = elements[3];


if (window.navigator.platform === 'iPhone') {
  window.addEventListener('devicemotion', _.debounce(setPosition, 50, {
    maxWait: 50,
  }));
} else {
  alert("for now the animation can only be triggerd from an iphone")
}

function setPosition(event) {
  let accelerationX = event.accelerationIncludingGravity.x;
  let positionX = _.round(accelerationX * 8);
  back.style.transform = 'rotateY(' + positionX + 'deg) translateZ(-600px)'
  middleBack.style.transform = 'rotateY(' + positionX + 'deg) translateZ(-300px)'
  middleFront.style.transform = 'rotateY(' + positionX + 'deg) translateZ(-150px)'
  front.style.transform = 'rotateY(' + positionX + 'deg) translateZ(0px)'
}
