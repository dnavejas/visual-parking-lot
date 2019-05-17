'use strict'
const setPLotBtn=document.createElement("input");
setPLotBtn.setAttribute("type", "button");
setPLotBtn.setAttribute("id", "plot-button");
setPLotBtn.setAttribute("value", "Create Parking Lot",);
setPLotBtn.setAttribute("onclick", "createParkLot()");
document.body.appendChild(setPLotBtn);

let carsWaiting=[];
let parkingSpots=[];
let carsArr=[];
// let highway=[];
// const numberOfSpots = 33;

function hide(){
    let pLotBtn=document.querySelector("#plot-button");
    pLotBtn.setAttribute("class", "hidden");
}
function hide2(){
    let carBtn=document.querySelector("#car-btn");
    carBtn.setAttribute("class", "hidden");
    let parkBtn=document.createElement("input");
    parkBtn.setAttribute("type", "button");
    parkBtn.setAttribute("id", "park-btn");
    parkBtn.setAttribute("value", "Park Some Cars",);
    parkBtn.setAttribute("onclick", "parkCars()");
    document.body.appendChild(parkBtn);

}
function setLeftRow(){
    let id=0;
    let rowTop=0;
    for (let l=0; l<9; l++){
        id++
        let pLot=document.querySelector("#parking-lot");
        let pSpace=document.createElement("div");
        pSpace.setAttribute("style", "top:"+rowTop+"px");
        pSpace.setAttribute("class", "p-spot row-left");
        pSpace.setAttribute("id", "p-spot"+id);
        rowTop+=112;
        pLot.appendChild(pSpace);
    }
}
function setRightRow(){
    let rowTop=0;
    let id=9;
    for (let r=0; r<9; r++){
        id++;
        let pLot=document.querySelector("#parking-lot");
        let pSpace=document.createElement("div");
        pSpace.setAttribute("style", "top:"+rowTop+"px;"+"left: 1163px;");
        pSpace.setAttribute("class", "p-spot row-right");
        pSpace.setAttribute("id", "p-spot"+id);
        rowTop+=112;
        pLot.appendChild(pSpace);
    }
}
function setTopRow(){
    let topRowleft=402;
    let id=18;
    for (let t=0; t<5; t++){
        id++;
        let pLot=document.querySelector("#parking-lot");
        let pSpace=document.createElement("div");
        pSpace.setAttribute("style", "left:"+topRowleft+"px; top: 0px;");
        pSpace.setAttribute("class", "p-spot row-top");
        pSpace.setAttribute("id", "p-spot"+id);
        topRowleft+=112;
        pLot.appendChild(pSpace);
    }
}
function setMiddleRow(){
    let middleRowLeft=402;
    let id=23;
    for (let m=0; m<5; m++){
        id++
        let pLot=document.querySelector("#parking-lot");
        let pSpace=document.createElement("div");
        pSpace.setAttribute("style", "left:"+middleRowLeft+"px;"+"top:404px;");
        pSpace.setAttribute("class", "p-spot row-middle");
        pSpace.setAttribute("id", "p-spot"+id);
        middleRowLeft+=112;
        pLot.appendChild(pSpace);
    }
}
function setBottomwRow(){
    let bottomRowLeft=402;
    let id=28;
    for (let b=0; b<5; b++){
        id++;
        let pLot=document.querySelector("#parking-lot");
        let pSpace=document.createElement("div");
        pSpace.setAttribute("style", "left:"+bottomRowLeft+"px;"+"top:808px;");
        pSpace.setAttribute("class", "p-spot row-bottom");
        pSpace.setAttribute("id", "p-spot"+id);
        bottomRowLeft+=112;
        pLot.appendChild(pSpace);
    }
}
function set1stRoadSec(){
    let id=0;
    let roadTop=1;
    for(let r=0; r<3; r++){
        id++;
        let pLot=document.querySelector("#parking-lot");
        let road=document.createElement("div");
        road.setAttribute("class", "road-left");
        road.setAttribute("id", "road"+id);
        road.setAttribute("style", "left:201px; top:"+roadTop+"px;")
        road.setAttribute("data-direction", "south")
        roadTop+=403;
        pLot.appendChild(road);
    }
}
function set2ndRoadSec(){
    let id=3;
    let roadTop=1;
    for(let r=0; r<3; r++){
        id++;
        let pLot=document.querySelector("#parking-lot");
        let road=document.createElement("div");
        road.setAttribute("class", "road-right");
        road.setAttribute("id", "road"+id);
        road.setAttribute("style", "left:301px; top:"+roadTop+"px;")
        road.setAttribute("data-direction", "north")
        roadTop+=403;
        pLot.appendChild(road);
    }
}
function set3rdRoadSec(){
    let id=6;
    let roadTop=1;
    for(let r=0; r<3; r++){
        id++;
        let pLot=document.querySelector("#parking-lot");
        let road=document.createElement("div");
        road.setAttribute("class", "road-left");
        road.setAttribute("id", "road"+id);
        road.setAttribute("style", "left:962px; top:"+roadTop+"px;")
        road.setAttribute("data-direction", "south")
        roadTop+=403;
        pLot.appendChild(road);
    }
}
function set4thRoadSec(){
    let id=9;
    let roadTop=1;
    for(let r=0; r<3; r++){
        id++;
        let pLot=document.querySelector("#parking-lot");
        let road=document.createElement("div");
        road.setAttribute("class", "road-right");
        road.setAttribute("id", "road"+id);
        road.setAttribute("style", "left:1062px; top:"+roadTop+"px;")
        road.setAttribute("data-direction", "north")
        roadTop+=403;
        pLot.appendChild(road);
    }
}
function set5thRoadSec(){
    let id=12;
    let roadTop=201;
    for(let r=0; r<2; r++){
        id++;
        let pLot=document.querySelector("#parking-lot");
        let road=document.createElement("div");
        road.setAttribute("class", "road-top");
        road.setAttribute("id", "road"+id);
        road.setAttribute("style", "left:403px; top:"+roadTop+"px;")
        road.setAttribute("data-direction", "west")
        roadTop+=404;
        pLot.appendChild(road);
    }
}
function set6thRoadSec(){
    let id=14;
    let roadTop=303;
    for(let r=0; r<2; r++){
        id++;
        let pLot=document.querySelector("#parking-lot");
        let road=document.createElement("div");
        road.setAttribute("class", "road-bottom");
        road.setAttribute("id", "road"+id);
        road.setAttribute("style", "left:403px; top:"+roadTop+"px;")
        road.setAttribute("data-direction", "east")
        roadTop+=404;
        pLot.appendChild(road);
    }
}
function set1stIsecs(){
    let id=1;
    let iSecTop=201;
    for(let r=0; r<2; r++){
        id++;
        let pLot=document.querySelector("#parking-lot");
        let road=document.createElement("div");
        road.setAttribute("class", "intersection-left");
        road.setAttribute("id", "intersection"+id);
        road.setAttribute("style", "left:201px; top:"+iSecTop+"px;");
        iSecTop+=403;
        pLot.appendChild(road);
    }
}
function set2ndIsecs(){
    let id=3;
    let iSecTop=201;
    for(let r=0; r<2; r++){
        id++;
        let pLot=document.querySelector("#parking-lot");
        let road=document.createElement("div");
        road.setAttribute("class", "intersection-left");
        road.setAttribute("id", "intersection"+id);
        road.setAttribute("style", "left:961px; top:"+iSecTop+"px;");
        iSecTop+=403;
        pLot.appendChild(road);
    }
}
function createEntAndExit(){
    const script=document.getElementById("p-lot-js");
    const entrance=document.createElement("div");
    entrance.setAttribute("id", "car-entrance");
    entrance.innerHTML = "ENTER";
    script.insertAdjacentElement('beforebegin', entrance);
    let exit=document.createElement("div");
    exit.setAttribute("id", "car-exit");
    exit.innerHTML = "EXIT";
    script.insertAdjacentElement('beforebegin', exit);
    let carBtn=document.createElement("input");
    carBtn.setAttribute("type", "button");
    carBtn.setAttribute("value", "Create Some Cars");
    carBtn.setAttribute("id", "car-btn");
    carBtn.setAttribute("onclick", "createCars()");
    script.insertAdjacentElement('beforebegin', carBtn);
}
function randomTime(t){
    var t=Math.floor(Math.random()*4000)+8000;
    return t;
}
let arrCarImages=[
    "car-aqua.png", "car-blue.png", 'car-dragon.png', 'car-green.png', 'car-grey.png', 'car-hot-pink.png', 'car-lime-green.png', 'car-orange.png', 'car-pink.png', 'car-purple.png', 'car-red-stripes.png', 'car-red.png', 'car-white.png', 'car-yellow.png'
]
function randomCarImage(arrCarImages){
    let min=0;
    let max=(arrCarImages.length-1);
    let randCar=Math.floor(Math.random()*(max-min));
    return arrCarImages[randCar];
}
function randomLP(lp){
    var l="";
    var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

    while (l.length<7) {
        l+=possible[Math.floor(Math.random()*possible.length)];
    } 
    return l;
}
function Car(){
    this.licensePlate = randomLP();
    this.time=randomTime();
    this.image=randomCarImage(arrCarImages);

    this.paint = () => {
        let start = document.getElementById("car-entrance");

        let newCar = document.createElement("img");
        newCar.setAttribute("src", this.image);
        newCar.setAttribute("id", this.licensePlate);
        newCar.setAttribute("class", "r90");
        newCar.setAttribute('style','position: absolute; top:50px; left:55px;')
        start.appendChild(newCar);
    }
}
function carFactory(i){
    for (i=0;i<1;i++){
        let car = new Car();
        car.paint()
        // carsWaiting.push(car);
    }
    // return carsWaiting;    
}
function getParkSpots(i){
    let id=0;
    for (i=0;i<33;i++){
        id++
        let parkingSpot=document.getElementById("p-spot"+id);
        let left=parkingSpot.offsetLeft;
        let top=parkingSpot.offsetTop; 
        parkingSpots.push(parkingSpot);
    }
}
function grabCars(){
    let cars=document.getElementsByTagName("img");

    for(let c=0; c<cars.length; c++)
    console.log(cars.length);
    console.dir(cars);
    carsArr.push(cars);
    return carsArr;
}