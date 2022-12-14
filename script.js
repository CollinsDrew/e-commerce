'use strict'

//console.log('Check')
// Event? --> on hovering the product I want the number of times I have passed

let tennisBatCounter = 0;
let cricketBatCounter = 0;

// product cart details
let productsSelection = [

    {name:'Tennis Bat',tennisBatSelectionCounter:0, price: 30},
    {name:'Cricket Bat',cricketBatSelectionCounter:0, price: 100},
]

let itemsElement = document.getElementById('items');
let productsElement = document.getElementById('products');
let priceElement = document.getElementById('price');

// function for tennis bat hover

let tennisBatElement = document.getElementById('tennisBatAnalytics');
let cricketBatElement = document.getElementById('cricketBatAnalytics');

// Initial render
tennisBatElement.innerHTML = tennisBatCounter;
cricketBatElement.innerHTML = cricketBatCounter;

function tennisBatHover(){
    tennisBatCounter++;
    showData();
    tennisBatElement.innerHTML = tennisBatCounter;
}

function cricketBatHover(){
    cricketBatCounter++;
    showData();
    cricketBatElement.innerHTML = cricketBatCounter;
}

// Canvas
const labels = [
    'Tennis Bat',
    'Cricket Bat'
  ];
let renderChart;

function showData(){

    if(renderChart){
        renderChart.destroy();
    }
    const data = {
        labels: labels,
        datasets: [{
          label: 'Sports Gear Analytics',
          backgroundColor: ['rgb(255, 99, 132)','rgb(20,189,222)'],
          borderColor: 'rgb(255, 99, 132)',
          data: [tennisBatCounter, cricketBatCounter],
        }]
      };
    
      const config = {
        type: 'bar',
        data: data,
        options: {}
      };
    
      renderChart = new Chart(
        document.getElementById('myChart'),config
      );
}

// buy and detail buttons
let elementShowTennisOptionsHere = document.getElementById('showTennisOptionsHere');
function check(){
    alert('checked');
}

let elementShowCricketOptionsHere = document.getElementById('showCricketOptionsHere');
function check(){
    alert('checked');
}

function buyTennis(){
    
    productsSelection[0].tennisBatSelectionCounter++;
    itemsElement.innerHTML = productsSelection[1].cricketBatSelectionCounter + productsSelection[0].tennisBatSelectionCounter;
    priceElement.innerHTML = (productsSelection[0].tennisBatSelectionCounter * productsSelection[0].price) + (productsSelection[1].cricketBatSelectionCounter * productsSelection[1].price) ;
    productsElement.innerHTML = productsSelection[0].name + ":" + productsSelection[0].tennisBatSelectionCounter + ","
                          + productsSelection[1].name + ":" + productsSelection[1].cricketBatSelectionCounter ;
}

function buyCricket(){
    
    productsSelection[1].cricketBatSelectionCounter++;
    itemsElement.innerHTML = productsSelection[1].cricketBatSelectionCounter + productsSelection[0].tennisBatSelectionCounter;
    priceElement.innerHTML = (productsSelection[0].tennisBatSelectionCounter * productsSelection[0].price) + (productsSelection[1].cricketBatSelectionCounter * productsSelection[1].price) ;
    productsElement.innerHTML = productsSelection[0].name + ":" + productsSelection[0].tennisBatSelectionCounter + ","
                          + productsSelection[1].name + ":" + productsSelection[1].cricketBatSelectionCounter ;
}

// cart 
function tennisOptions(){

    // create new div element
    let newElement = document.createElement('div');

    // add class
    newElement.classList.add('newElement');


    // create new button element for view details
    let newBtnElement = document.createElement('button');

    // add some content
    newBtnElement.textContent = "View Details";

    // add event listener
    newBtnElement.addEventListener("click",check);

    // create new button element for buying
    let newBtnElement2 = document.createElement('button');

    // add some content
    newBtnElement2.textContent = "Buy Now";

    // add event listener
    newBtnElement2.addEventListener("click",buyTennis);

    // append the button element to the new element div
    newElement.appendChild(newBtnElement);
    newElement.appendChild(newBtnElement2);

    // append child to the div element
    elementShowTennisOptionsHere.appendChild(newElement);      
}

function cricketOptions(){

    // create new div element
    let newElement = document.createElement('div');

    // add calss
    newElement.classList.add('newElement');


    // create new button element for view details
    let newBtnElement = document.createElement('button');

    // add some content
    newBtnElement.textContent = "View Details";

    // add event listener
    newBtnElement.addEventListener("click",check);

    // create new button element for buying
    let newBtnElement2 = document.createElement('button');

    // add some content
    newBtnElement2.textContent = "Buy Now";

    // add event listener
    newBtnElement2.addEventListener("click",buyCricket);

    // append the button element to the new element div
    newElement.appendChild(newBtnElement);
    newElement.appendChild(newBtnElement2);

    // append child to the div element
    elementShowCricketOptionsHere.appendChild(newElement);   
}
