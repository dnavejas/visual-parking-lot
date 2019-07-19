"use strict";
let carsWaiting = [];
let carsArr = [];

function randomTime() {
  var time = Math.floor(Math.random() * 4000) + 8000;
  return time;
}
let arrCarImages = [
  "../images/car-aqua.png",
  "../images/car-blue.png",
  "../images/car-dragon.png",
  "../images/car-green.png",
  "../images/car-grey.png",
  "../images/car-hot-pink.png",
  "../images/car-lime-green.png",
  "../images/car-orange.png",
  "../images/car-pink.png",
  "../images/car-purple.png",
  "../images/car-red-stripes.png",
  "../images/car-red.png",
  "../images/car-white.png",
  "../images/car-yellow.png"
];
function randomCarImage(arrCarImages) {
  let min = 0;
  let max = arrCarImages.length - 1;
  let randCar = Math.floor(Math.random() * (max - min));
  return arrCarImages[randCar];
}
function randomLP() {
  var l = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

  while (l.length < 7) {
    l += possible[Math.floor(Math.random() * possible.length)];
  }
  return l;
}
function Car() {
  this.licensePlate = randomLP();
  this.time = randomTime();
  this.image = randomCarImage(arrCarImages);
  this.time = randomTime();
  this.leave = function() {
    console.log("car left");
  };
  this.paint = () => {
    let start = document.getElementById("car-entrance");

    let newCar = document.createElement("img");
    newCar.setAttribute("src", this.image);
    newCar.setAttribute("id", this.licensePlate);
    newCar.setAttribute("class", "r90");
    newCar.setAttribute("style", "position: absolute; top:50px; left:55px;");
    start.appendChild(newCar);
  };
}
function carFactory() {
  for (let i = 0; i < 33; i++) {
    let car = new Car();
    car.paint();
    carsWaiting.push(car);
  }
  return carsWaiting;
}
