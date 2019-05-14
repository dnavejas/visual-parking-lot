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

let leftRow = document.querySelectorAll(".left-row");
let rightRow = document.querySelectorAll(".row-right");
let topRow = document.querySelectorAll(".row-top")
let middleRow = document.querySelectorAll(".row-middle")
let bottomRow = document.querySelectorAll(".row-bottom")
function setLeftRow(leftRow){
    let leftRowTop = 0;
    for (let l=0; l<leftRow.length; l++){
        leftRow[l].setAttribute("style", "top:" + leftRowTop + "px");
        leftRowTop += 100;
    }
}
function setRightRow(rightRow){
    let rightRowTop = 0;
    for (let r=0; r<rightRow.length; r++){
        rightRow[r].setAttribute("style", "top:" + rightRowTop + "px;" + "left:" + 1100 +"px;");
        rightRowTop += 100;

    }
}
function setTopRow(topRow){
    let topRowleft = 400;
    for (let t=0; t<topRow.length; t++){
        topRow[t].setAttribute("style", "left:" + topRowleft + "px; top: 0px;");
        topRowleft += 100;
    }
}
function setMiddleRow(middleRow){
    let middleRowLeft = 400;
    for (let m=0; m<middleRow.length; m++){
        middleRow[m].setAttribute("style", "left:" + middleRowLeft + "px;"+ "top:400px;");
        middleRowLeft += 100;
    }
}
function setBottomwRow(bottomRow){
    let bottomRowLeft = 400;
    for (let b=0; b<bottomRow.length; b++){
        bottomRow[b].setAttribute("style", "left:" + bottomRowLeft + "px;"+ "top:700px;");
        bottomRowLeft += 100;
    }
}
setLeftRow(leftRow);
setRightRow(rightRow);
setTopRow(topRow);
setMiddleRow(middleRow);
setBottomwRow(bottomRow);