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
function assignCarToSpot() {
  let randomSpot = getRandomParkSpot();
  let randomCar = carsArr[Math.floor(Math.random() * (1 + carsArr.length))].id;
  randomSpot.carInSpot = randomCar;
  return randomCar, randomSpot;
}
let intervalId = setInterval(function() {
  // parkCar();
});
function parkCar() {
  let carId = assignCarToSpot().carInSpot;
  let spot = assignCarToSpot();
  console.dir(spot.parkingSpot);
  for (let i = carsWaiting.length - 1; i >= 0; --i) {
    if (carsWaiting[i].licensePlate === carId) {
      let car = carsWaiting[i];
      carsWaiting.splice(i, 1);
      for (let b = carsArr.length - 1; b >= 0; --b) {
        if (carsArr[b].id == car.licensePlate) {
          let carImage = carsArr[b];
          move(carImage);
        }
      }
    }
  }
  console.log(carsWaiting);
}
function move(car) {
  console.dir(car);
}
