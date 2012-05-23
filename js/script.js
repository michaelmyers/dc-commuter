/**
 * Animatronic
 * @license Copyright (C) 2012, Atomizer Software
 * http://atomizersoft.net
 *
 * @author Atomizer Software
 */

/*global $:false */

$(document).ready(function () {
    'use strict';
    $(".tab").click(function () {
        //console.log(this.id);
        $(".panel").toggle("fast");
        $(this).toggleClass("active");
        return false;
    });
});



