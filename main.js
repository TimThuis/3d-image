const elements = document.querySelectorAll('.element')
const backEl = elements[0];
const middleBackEl = elements[1];
const middleFrontEl = elements[2];
const frontEl = elements[3];
const platform = window.navigator.platform
const regex = new RegExp('/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/');
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const windowHeightCenter = windowHeight / 2;
const windowWidthCenter = windowWidth / 2;
const velocityWeb = .25;
const velocityMobile = .5;

let pMobileY;
let pMobileX;
let pWebY;
let pWebX;

if (regex.test(platform)) {
  // alert('The mobile-platform your using is: ' + platform);
  window.addEventListener('devicemotion', _.debounce(positionMobile, 100, {
    maxWait: 100,
  }));
} else {
  console.log('The web-platform your using is: ' + platform)
  window.addEventListener('mousemove', positionWeb);
}

function positionWeb(e) {
  pWebY = e.screenY;
  pWebX = e.screenX;
  let percentWebY = (pWebY / windowHeightCenter * 150) - 100;
  let percentWebX = (pWebX / windowWidthCenter * 200) - 200;
  setPostionElements(percentWebY, percentWebX, velocityWeb)
}

function positionMobile(e) {
  pMobileY = e.accelerationIncludingGravity.y;
  pMobileX = e.accelerationIncludingGravity.x;
  let percentMobileY = pMobileY * 15 + 75;
  // let percentMobileX = -pMobileX * 10;
  let percentMobileX = 0
  setPostionElements(percentMobileY, percentMobileX, velocityMobile)
}

function setPostionElements(y, x, v) {
  let rotationY = _.round(y * v, 2);
  let rotationX = _.round(-x * v, 2);
  console.log(rotationY, rotationX);
  backEl.style.transform = `rotateX(${rotationY}deg) rotateY(${rotationX}deg) translateZ(-600px)`;
  middleBackEl.style.transform = `rotateX(${rotationY}deg) rotateY(${rotationX}deg) translateZ(-300px)`;
  middleFrontEl.style.transform = `rotateX(${rotationY}deg) rotateY(${rotationX}deg) translateZ(-150px)`;
  frontEl.style.transform = `rotateX(${rotationY}deg) rotateY(${rotationX}deg) translateZ(0px)`;
}
