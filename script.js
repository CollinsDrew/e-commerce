'use strict'

let tennisBatCounter = 0;
let cricketBatCounter =0;

let tennisBatElement = document.getElementById('tennisBatAnalytics');
let cricketBatElement = document.getElementById('cricketBatAnalytics');

tennisBatElement.innerHTML = tennisBatCounter;
cricketBatElement.innerHTML = cricketBatCounter;

function tennisBatHover() {
    tennisBatCounter++;
    tennisBatElement.innerHTML = tennisBatCounter;
}

function cricketBatHover() {
    cricketBatCounter++;
    cricketBatElement.innerHTML = cricketBatCounter;
}