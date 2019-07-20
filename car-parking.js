const decrementTop = 20;
const incrementLeft = 2;
const incrementTop = 2;
const decrementLeft = 2;

function move(car, left, top) {
  let carLeft = getProps(car).left;
  let carTop = getProps(car).top;
  if (carTop > top) {
    car.style.top = carTop - decrementTop + "px";
  }
}
