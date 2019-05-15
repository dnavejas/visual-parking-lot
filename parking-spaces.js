'use strict'
let pLot=document.querySelector("#parking-lot");
let pSpace=document.createElement("div");
let setPLotBtn=document.createElement("input");
setPLotBtn.setAttribute("type", "button");
setPLotBtn.setAttribute("id", "plot-button");
setPLotBtn.setAttribute("value", "Create Parking Lot",);
setPLotBtn.setAttribute("onclick", "createParkLot()");
document.body.appendChild(setPLotBtn);

function hide(){
    let btn=document.querySelector("#plot-button");
    btn.setAttribute("class", "hidden");
}
function setLeftRow(){
    let rowTop=0;
    let id=0;
    for (let l=0; l<9; l++){
        id++
        let pLot=document.querySelector("#parking-lot");
        let pSpace=document.createElement("div");
        pSpace.setAttribute("style", "top:" + rowTop + "px");
        pSpace.setAttribute("class", "p-spot row-left");
        pSpace.setAttribute("id", "p-spot"+id);
        rowTop+=100;
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
        pSpace.setAttribute("style", "top:" + rowTop + "px;" + "left: 1100px;");
        pSpace.setAttribute("class", "p-spot row-right");
        pSpace.setAttribute("id", "p-spot"+id);
        rowTop+=100;
        pLot.appendChild(pSpace);
    }
}
function setTopRow(){
    let topRowleft=400;
    let id=18;
    for (let t=0; t<5; t++){
        id++;
        let pLot=document.querySelector("#parking-lot");
        let pSpace=document.createElement("div");
        pSpace.setAttribute("style", "left:" + topRowleft + "px; top: 0px;");
        pSpace.setAttribute("class", "p-spot row-top");
        pSpace.setAttribute("id", "p-spot"+id);
        topRowleft+=100;
        pLot.appendChild(pSpace);
    }
}
function setMiddleRow(){
    let middleRowLeft=400;
    let id=23;
    for (let m=0; m<5; m++){
        id++
        let pLot=document.querySelector("#parking-lot");
        let pSpace=document.createElement("div");
        pSpace.setAttribute("style", "left:" + middleRowLeft + "px;"+ "top:350px;");
        pSpace.setAttribute("class", "p-spot row-middle");
        pSpace.setAttribute("id", "p-spot"+id);
        middleRowLeft+=100;
        pLot.appendChild(pSpace);
    }
}
function setBottomwRow(){
    let bottomRowLeft=400;
    let id=27;
    for (let b=0; b<5; b++){
        id++;
        let pLot=document.querySelector("#parking-lot");
        let pSpace=document.createElement("div");
        pSpace.setAttribute("style", "left:" + bottomRowLeft + "px;"+ "top:700px;");
        pSpace.setAttribute("class", "p-spot row-bottom");
        pSpace.setAttribute("id", "p-spot"+id);
        bottomRowLeft+=100;
        pLot.appendChild(pSpace);
    }
}