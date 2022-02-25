
const images = ["0.jpg","1.jpg"];

const choseImage =images [Math.floor(Math.random()*images.length)];

const bodyBackground = document.querySelector("body");

bodyBackground.style.background = `url(./img/${choseImage})`;