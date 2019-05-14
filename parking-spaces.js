'use strict'
let carsWaiting = [];
function randomTime(t){
    var t = Math.floor(Math.random() * 4000) + 1000;
    return t;
}
let carsArray = [
    {name: 'aqua-car', image: 'car-aqua.png'},
    {name: 'blue-car', image: 'car-blue.png'},
    {name: 'dragon-car', image: 'car-dragon.png'},
    {name: 'green-car', image: 'car-green.png'},
    {name: 'grey-car', image: 'car-grey.png'},
    {name: 'hot-pink-car', image: 'car-hot-pink.png'},
    {name: 'lime-green-car', image: 'car-lime-green.png'},
    {name: 'orange-car', image: 'car-orange.png'},
    {name: 'pink-car', image: 'car-pink.png'},
    {name: 'purple-car', image: 'car-purple.png'},
    {name: 'red-stripes-car', image: 'car-red-stripes.png'},
    {name: 'red-car', image: 'car-red.png'},
    {name: 'white-car', image: 'car-white.png'},
    {name: 'yellow-car', image: 'car-yellow.png'},
]