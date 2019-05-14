'use strict'
let carsWaiting = [];
function randomTime(t){
    var t = Math.floor(Math.random() * 4000) + 8000;
    return t;
}
let arrCarImages = [
    "car-aqua.png", "car-blue.png", 'car-dragon.png', 'car-green.png', 'car-grey.png', 'car-hot-pink.png', 'car-lime-green.png', 'car-orange.png', 'car-pink.png', 'car-purple.png', 'car-red-stripes.png', 'car-red.png', 'car-white.png', 'car-yellow.png'
]
function randomCarImage(arrCarImages){
    let min = 0;
    let max = (arrCarImages.length - 1);
    let randCar = Math.floor(Math.random() * (max - min));
    return arrCarImages[randCar];
}
function randomLP (lp){
    var l = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

    while (l.length < 7) {
        l += possible[Math.floor(Math.random() * possible.length)];
    } 
    return l
}
function Car(licensePlate, time, image){
    console.dir(this);
    this.licensePlate = randomLP();
    this.time = randomTime();
}
function carFactory(i){
    for (i = 0; i < 1; i++){
        let car = new Car();
        carsWaiting.push(car);
    }
    return carsWaiting;
}
carFactory();
console.log(carsWaiting);

let leftRow = document.querySelectorAll(".row-left");
let rightRow = document.querySelectorAll(".row-right");
let topRow = document.querySelectorAll(".row-top")
let middleRow = document.querySelectorAll(".row-middle")
let bottomRow = document.querySelectorAll(".row-bottom")
let x = 0;
let y = 0;
