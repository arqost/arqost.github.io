"use strict";

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

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
