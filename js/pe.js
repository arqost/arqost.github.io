"use strict";

window.addEventListener('load', function () {
    function setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function eraseCookie(name) {   
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    function isCookieEneble(name) {
      var retVal = false;
        // Quick test if browser has cookieEnabled host property
      //if (navigator.cookieEnabled) { retVal = true };
      // Create cookie
      // document.cookie = "cookietest=1";
      if ( retVal == false ) {
          setCookie(name,1,1);
          var retVal = document.cookie.indexOf(name) != -1;
          // Delete cookie
          // document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
          eraseCookie(name);
      }
      console.log(retVal);
      return retVal;
    }
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
