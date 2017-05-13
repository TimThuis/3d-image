const elements = document.querySelectorAll('.element')
const back = elements[0];
const middleBack = elements[1];
const middleFront = elements[2];
const front = elements[3];
const platform = window.navigator.platform;
const platformChecker = new RegExp('Android|webOS|iPhone|iPad')

if (platformChecker.test(platform)) {
  window.addEventListener('devicemotion', _.debounce(setPosition, 50, {
    maxWait: 50,
  }));
} else {
  alert("for now the animation can only be triggerd from a mobile platform")
}

function setPosition(event) {
  let accelerationX = event.accelerationIncludingGravity.x;
  let positionX = _.round(accelerationX * 8);

  back.style.transform = 'rotateY(' + positionX + 'deg) translateZ(-600px)'
  middleBack.style.transform = 'rotateY(' + positionX + 'deg) translateZ(-300px)'
  middleFront.style.transform = 'rotateY(' + positionX + 'deg) translateZ(-150px)'
  front.style.transform = 'rotateY(' + positionX + 'deg) translateZ(0px)'
}
