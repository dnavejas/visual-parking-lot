"use strict";
const setPLotBtn = document.createElement("input");
setPLotBtn.setAttribute("type", "button");
setPLotBtn.setAttribute("id", "plot-button");
setPLotBtn.setAttribute("value", "Create Parking Lot");
setPLotBtn.setAttribute("onclick", "createParkLot()");
document.body.appendChild(setPLotBtn);

let parkingSpots = [];

// let highway=[];
const numberOfSpots = 33;

function hide() {
  let pLotBtn = document.querySelector("#plot-button");
  pLotBtn.setAttribute("class", "hidden");
}
function hide2() {
  let carBtn = document.querySelector("#car-btn");
  carBtn.setAttribute("class", "hidden");
  let parkBtn = document.createElement("input");
  parkBtn.setAttribute("type", "button");
  parkBtn.setAttribute("id", "park-btn");
  parkBtn.setAttribute("value", "Park Some Cars");
  parkBtn.setAttribute("onclick", "parkCars()");
  document.body.appendChild(parkBtn);
}
function setLeftRow() {
  let id = 0;
  let rowTop = 0;
  let rowLeft = 0;
  for (let l = 0; l < 9; l++) {
    id++;
    let pLot = document.querySelector("#parking-lot");
    let pSpace = document.createElement("div");
    pSpace.setAttribute("style", "top:" + rowTop + "px");
    pSpace.setAttribute("class", "p-spot row-left");
    pSpace.setAttribute("id", "p-spot" + id);
    pSpace.setAttribute("entrance-top", rowTop);
    pSpace.setAttribute("entrance-left", rowLeft + 200);
    rowTop += 112;
    pLot.appendChild(pSpace);
  }
}
function setRightRow() {
  let rowTop = 0;
  let rowLeft = 1163;
  let id = 9;
  for (let r = 0; r < 9; r++) {
    id++;
    let pLot = document.querySelector("#parking-lot");
    let pSpace = document.createElement("div");
    pSpace.setAttribute("style", `top:${rowTop}px; left:${rowLeft}px;`);
    pSpace.setAttribute("class", "p-spot row-right");
    pSpace.setAttribute("id", "p-spot" + id);
    pSpace.setAttribute("entrance-top", rowTop);
    pSpace.setAttribute("entrance-left", rowLeft);
    rowTop += 112;
    pLot.appendChild(pSpace);
  }
}
function setTopRow() {
  let topRowLeft = 402;
  let rowTop = 0;
  let id = 18;
  for (let t = 0; t < 5; t++) {
    id++;
    let pLot = document.querySelector("#parking-lot");
    let pSpace = document.createElement("div");
    pSpace.setAttribute("style", `left:${topRowLeft}px; top:${rowTop}px;`);
    pSpace.setAttribute("class", "p-spot row-top");
    pSpace.setAttribute("id", "p-spot" + id);
    pSpace.setAttribute("entrance-top", rowTop + 200);
    pSpace.setAttribute("entrance-left", topRowLeft);
    topRowLeft += 112;
    pLot.appendChild(pSpace);
  }
}
function setMiddleRow() {
  let middleRowLeft = 402;
  let rowTop = 404;
  let id = 23;
  for (let m = 0; m < 5; m++) {
    id++;
    let pLot = document.querySelector("#parking-lot");
    let pSpace = document.createElement("div");
    pSpace.setAttribute("style", `left:${middleRowLeft}px; top:${rowTop}px;`);
    pSpace.setAttribute("class", "p-spot row-middle");
    pSpace.setAttribute("id", "p-spot" + id);
    pSpace.setAttribute("entrance-top", rowTop);
    pSpace.setAttribute("entrance-left", middleRowLeft);
    middleRowLeft += 112;
    pLot.appendChild(pSpace);
  }
}
function setBottomwRow() {
  let bottomRowLeft = 402;
  let rowTop = 808;
  let id = 28;
  for (let b = 0; b < 5; b++) {
    id++;
    let pLot = document.querySelector("#parking-lot");
    let pSpace = document.createElement("div");
    pSpace.setAttribute("style", `left:${bottomRowLeft}px; top:${rowTop}px;`);
    pSpace.setAttribute("class", "p-spot row-bottom");
    pSpace.setAttribute("id", "p-spot" + id);
    pSpace.setAttribute("entrance-top", rowTop);
    pSpace.setAttribute("entrance-left", bottomRowLeft);
    bottomRowLeft += 112;
    pLot.appendChild(pSpace);
  }
}
function set1stRoadSec() {
  let id = 0;
  let roadTop = 1;
  for (let r = 0; r < 3; r++) {
    id++;
    let pLot = document.querySelector("#parking-lot");
    let road = document.createElement("div");
    road.setAttribute("class", "road-left");
    road.setAttribute("id", "road" + id);
    road.setAttribute("style", "left:201px; top:" + roadTop + "px;");
    road.setAttribute("data-direction", "south");
    roadTop += 403;
    pLot.appendChild(road);
  }
}
function set2ndRoadSec() {
  let id = 3;
  let roadTop = 1;
  for (let r = 0; r < 3; r++) {
    id++;
    let pLot = document.querySelector("#parking-lot");
    let road = document.createElement("div");
    road.setAttribute("class", "road-right");
    road.setAttribute("id", "road" + id);
    road.setAttribute("style", "left:301px; top:" + roadTop + "px;");
    road.setAttribute("data-direction", "north");
    roadTop += 403;
    pLot.appendChild(road);
  }
}
function set3rdRoadSec() {
  let id = 6;
  let roadTop = 1;
  for (let r = 0; r < 3; r++) {
    id++;
    let pLot = document.querySelector("#parking-lot");
    let road = document.createElement("div");
    road.setAttribute("class", "road-left");
    road.setAttribute("id", "road" + id);
    road.setAttribute("style", "left:962px; top:" + roadTop + "px;");
    road.setAttribute("data-direction", "south");
    roadTop += 403;
    pLot.appendChild(road);
  }
}
function set4thRoadSec() {
  let id = 9;
  let roadTop = 1;
  for (let r = 0; r < 3; r++) {
    id++;
    let pLot = document.querySelector("#parking-lot");
    let road = document.createElement("div");
    road.setAttribute("class", "road-right");
    road.setAttribute("id", "road" + id);
    road.setAttribute("style", "left:1062px; top:" + roadTop + "px;");
    road.setAttribute("data-direction", "north");
    roadTop += 403;
    pLot.appendChild(road);
  }
}
function set5thRoadSec() {
  let id = 12;
  let roadTop = 201;
  for (let r = 0; r < 2; r++) {
    id++;
    let pLot = document.querySelector("#parking-lot");
    let road = document.createElement("div");
    road.setAttribute("class", "road-top");
    road.setAttribute("id", "road" + id);
    road.setAttribute("style", "left:403px; top:" + roadTop + "px;");
    road.setAttribute("data-direction", "west");
    roadTop += 404;
    pLot.appendChild(road);
  }
}
function set6thRoadSec() {
  let id = 14;
  let roadTop = 303;
  for (let r = 0; r < 2; r++) {
    id++;
    let pLot = document.querySelector("#parking-lot");
    let road = document.createElement("div");
    road.setAttribute("class", "road-bottom");
    road.setAttribute("id", "road" + id);
    road.setAttribute("style", "left:403px; top:" + roadTop + "px;");
    road.setAttribute("data-direction", "east");
    roadTop += 404;
    pLot.appendChild(road);
  }
}
function set1stIsecs() {
  let id = 1;
  let iSecTop = 201;
  for (let r = 0; r < 2; r++) {
    id++;
    let pLot = document.querySelector("#parking-lot");
    let road = document.createElement("div");
    road.setAttribute("class", "intersection-left");
    road.setAttribute("id", "intersection" + id);
    road.setAttribute("style", "left:201px; top:" + iSecTop + "px;");
    iSecTop += 403;
    pLot.appendChild(road);
  }
}
function set2ndIsecs() {
  let id = 3;
  let iSecTop = 201;
  for (let r = 0; r < 2; r++) {
    id++;
    let pLot = document.querySelector("#parking-lot");
    let road = document.createElement("div");
    road.setAttribute("class", "intersection-left");
    road.setAttribute("id", "intersection" + id);
    road.setAttribute("style", "left:961px; top:" + iSecTop + "px;");
    iSecTop += 403;
    pLot.appendChild(road);
  }
}
function createEntAndExit() {
  const script = document.getElementById("p-lot-js");
  const entrance = document.createElement("div");
  entrance.setAttribute("id", "car-entrance");
  entrance.innerHTML = "ENTER";
  script.insertAdjacentElement("beforebegin", entrance);
  let exit = document.createElement("div");
  exit.setAttribute("id", "car-exit");
  exit.innerHTML = "EXIT";
  script.insertAdjacentElement("beforebegin", exit);
  let carBtn = document.createElement("input");
  carBtn.setAttribute("type", "button");
  carBtn.setAttribute("value", "Create Some Cars");
  carBtn.setAttribute("id", "car-btn");
  carBtn.setAttribute("onclick", "createCars()");
  script.insertAdjacentElement("beforebegin", carBtn);
}
