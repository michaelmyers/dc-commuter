/**
 * Animatronic
 * @license Copyright (C) 2012, Atomizer Software
 * http://atomizersoft.net
 *
 * @author Atomizer Software
 */

/*global $:false, google:false */

var detectBrowser = function () {
    'use strict';
    var useragent = navigator.userAgent;
    console.log(useragent);
};

var mapInit = function () {
    'use strict';

    var myOptions = {

        //white house: 38.8977° N, 77.0366° W
        center: new google.maps.LatLng(38.889931, -77.00901),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);



};

$(document).ready(function () {
    'use strict';

    mapInit();

    detectBrowser();

    $('.tab').click(function () {
        var currentID;
        currentID = $(this).attr('href');
        console.log(currentID);
        $(currentID).toggle('fast');
        $(this).toggleClass("active");

        /*if ( currentID === '#traffic') {
            mapInit();
        } */
        //google.maps.event.trigger(map, "resize");
        return false;
    });
});



