'use strict'
function createParkLot(){
    hide();
    setLeftRow();
    setRightRow();
    setTopRow();
    setMiddleRow();
    setBottomwRow();
    set1stRoadSec();
    set2ndRoadSec();
    set3rdRoadSec();
    set4thRoadSec();
    set5thRoadSec();
    set6thRoadSec();
    set1stIsecs();
    set2ndIsecs();
    createEntAndExit();
} 

function parkCars(){
    carFactory();
    getParkSpots();
}