"use strict";
function getParkSpots() {
  for (let i = 1; i <= 33; i++) {
    let parkingSpotEle = document.getElementById("p-spot" + i);
    let left = parkingSpotEle.offsetLeft;
    let top = parkingSpotEle.offsetTop;

    let parkingSpot = {
      parkingSpot: parkingSpotEle,
      left: left,
      top: top,
      carInSpot: ""
    };

    parkingSpots.push(parkingSpot);
  }
  return parkingSpots;
}
function grabCars() {
  let cars = document.getElementsByClassName("r90");
  for (let i = 0; i < cars.length; i++) {
    carsArr.push(cars.item(i));
  }
  return carsArr;
}
function getRandomParkSpot() {
  //add logic to prevent grabbing same spot while its filled\
  for (;;) {
    let randomSpot =
      parkingSpots[Math.floor(Math.random() * parkingSpots.length)];
    if (randomSpot.carInSpot == "") return randomSpot;
  }
}
function assignCarToSpot(car) {
  let randomSpot = getRandomParkSpot();
  let randomCar = carsArr[Math.floor(Math.random() * (1 + carsArr.length))].id;
  randomSpot.carInSpot = randomCar;
  return randomCar, randomSpot;
}
function getProps(element) {
  let ce = window.getComputedStyle(element);
  let props = {
    left: stripPx(ce.left),
    top: stripPx(ce.top)
  };
  return props;
}
function stripPx(prop) {
  return parseInt(prop.replace("px", ""));
}
function parkCar() {
  let carId = assignCarToSpot().carInSpot;
  let spot = assignCarToSpot();
  let eLeft = spot.parkingSpot.attributes.getNamedItem("entrance-left")
    .nodeValue;
  let eTop = spot.parkingSpot.attributes.getNamedItem("entrance-top").nodeValue;
  for (let i = carsWaiting.length - 1; i >= 0; --i) {
    if (carsWaiting[i].licensePlate === carId) {
      let car = carsWaiting[i];
      carsWaiting.splice(i, 1);
      for (let b = carsArr.length - 1; b >= 0; --b) {
        if (carsArr[b].id == car.licensePlate) {
          let carImage = carsArr[b];
          move(carImage, eLeft, eTop);
        }
      }
    }
  }
  console.log(carsWaiting);
}
