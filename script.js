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
    showData();
    tennisBatElement.innerHTML = tennisBatCounter;
}

function cricketBatHover() {
    cricketBatCounter++;
    showData();
    cricketBatElement.innerHTML = cricketBatCounter;
}

//Canvas chart

const labels = [
    'Tennis Bat',
    'Cricket Bat',
  ];
  
  let renderChart;

  function showData(){
    if (renderChart){
        renderChart.destroy();
    }
  

  const data = {
    labels: labels,
    datasets: [{
      label: 'Hover Analytics',
      backgroundColor: ['rgb(255, 99, 132)','rgb(255, 99, 132)'],
      borderColor: 'rgb(255, 99, 132)',
      data: [tennisBatCounter, cricketBatCounter],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  renderChart= new Chart(
    document.getElementById('myChart'),
    config
  );
  }