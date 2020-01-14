"use strict";

function createPointSqare(x,y) {
    // <svg width="400" height="110">
    // <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
    // </svg>
}

function getClass(className) {
    let classArray = window.document.getElementsByClassName(className);
    return classArray;
}


$(function() {
    console.log('ready!!!');
    console.log(getClass('mrEdit'));
    // $(img).appendTo( $('.container-points') );
    // createPoint(10,10);
})