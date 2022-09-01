'use strict'

let tennisBatCounter = 0;
let cricketBatCounter =0;

let tennisBatElement = document.getElementById('tennisBatAnalytics');
let cricketBatElement = document.getElementById('cricketBatAnalytics');

tennisBatElement.innerHTML = tennisBatCounter;
cricketBatElement.innerHTML = cricketBatCounter;

// Hover Analytics
function tennisBatHover() {
    tennisBatCounter++;
    tennisBatElement.innerHTML = tennisBatCounter;
}

function cricketBatHover() {
    cricketBatCounter++;
    cricketBatElement.innerHTML = cricketBatCounter;
}

//Canvas chart

const labels = [
    'Tennis Bat',
    'Cricket Bat',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Hover Analytics',
      backgroundColor: ['rgb(255, 99, 132)','rgb(255, 99, 132)'],
      borderColor: 'rgb(255, 99, 132)',
      data: [10, 10],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );