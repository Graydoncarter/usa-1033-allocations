// This isn't necessary but it keeps the editor from thinking L and carto are typos
/* global L, carto */

// Set Default Center & Zoom
var map = L.map('map', {
  center: [38, -97.5],
  zoom: 4
});

// Add base layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);

// Initialize Carto
var client = new carto.Client({
  apiKey: 'default_public',
  username: 'graydon-carter'
});















//////////////////////////////////////////////////////////

//////////////////////////////////
// WEST Regional DROPDOWN //
//////////////////////////////////

// Step 1: Find the dropdown by class. If you are using a different class, change this.
var layerPicker = document.querySelector('.layer-picker');

// Step 2: Add an event listener to the dropdown. We will run some code whenever the dropdown changes.
layerPicker.addEventListener('change', function (e) {
  // The value of the dropdown is in e.target.value when it changes
  var lifeStage = e.target.value;
  
  // Step 3: Decide on the SQL query to use and set it on the datasource
  if (lifeStage === 'all') {
    // If the value is "all" then we show all of the features, unfiltered
    source.setQuery("SELECT * FROM western_regional_allocations");
  }
  else {
    // Else the value must be set to a life stage. Use it in an SQL query that will filter to that life stage.
    source.setQuery("SELECT * FROM western_regional_allocations WHERE state = '" +lifeStage+ "'");
    source2.setQuery("SELECT * FROM western_regional_allocations WHERE _2015_aggregate_county_plus_local < 0")
  }
  
  // Sometimes it helps to log messages, here we log the lifestage. You can see this if you open developer tools and look at the console.
  console.log('Dropdown changed to "' + lifeStage + '"');
});


//////////////////////////////////
// SOUTH Regional DROPDOWN //
//////////////////////////////////


// Step 1: Find the dropdown by class. If you are using a different class, change this.
var layerPicker2 = document.querySelector('.layer-picker2');

// Step 2: Add an event listener to the dropdown. We will run some code whenever the dropdown changes.
layerPicker2.addEventListener('change', function (e) {
  // The value of the dropdown is in e.target.value when it changes
  var lifeStage2 = e.target.value;
  
  // Step 3: Decide on the SQL query to use and set it on the datasource
  if (lifeStage2 === 'all') {
    // If the value is "all" then we show all of the features, unfiltered
    source3.setQuery("SELECT * FROM south_regional_allocations");
  }
  else {
    // Else the value must be set to a life stage. Use it in an SQL query that will filter to that life stage.
    source3.setQuery("SELECT * FROM south_regional_allocations WHERE state = '" +lifeStage2+ "'");
    source4.setQuery("SELECT * FROM south_regional_allocations WHERE _2015_aggregate_county_plus_local < 0")
  }
  
  // Sometimes it helps to log messages, here we log the lifestage. You can see this if you open developer tools and look at the console.
  console.log('Dropdown changed to "' + lifeStage2 + '"');
});


//////////////////////////////////
// MIDWEST Regional DROPDOWN //
//////////////////////////////////

// Step 1: Find the dropdown by class. If you are using a different class, change this.
var layerPicker3 = document.querySelector('.layer-picker3');

// Step 2: Add an event listener to the dropdown. We will run some code whenever the dropdown changes.
layerPicker3.addEventListener('change', function (e) {
  // The value of the dropdown is in e.target.value when it changes
  var lifeStage3 = e.target.value;
  
  // Step 3: Decide on the SQL query to use and set it on the datasource
  if (lifeStage3 === 'all') {
    // If the value is "all" then we show all of the features, unfiltered
    source7.setQuery("SELECT * FROM midwest_regional_allocations");
  }
  else {
    // Else the value must be set to a life stage. Use it in an SQL query that will filter to that life stage.
    source7.setQuery("SELECT * FROM midwest_regional_allocations WHERE state = '" +lifeStage3+ "'");
    source8.setQuery("SELECT * FROM midwest_regional_allocations WHERE _2015_aggregate_county_plus_local < 0")
  }
  
  // Sometimes it helps to log messages, here we log the lifestage. You can see this if you open developer tools and look at the console.
  console.log('Dropdown changed to "' + lifeStage3 + '"');
});


//////////////////////////////////
// NORTH-EAST Regional DROPDOWN //
//////////////////////////////////

// Step 1: Find the dropdown by class. If you are using a different class, change this.
var layerPicker4 = document.querySelector('.layer-picker4');

// Step 2: Add an event listener to the dropdown. We will run some code whenever the dropdown changes.
layerPicker4.addEventListener('change', function (e) {
  // The value of the dropdown is in e.target.value when it changes
  var lifeStage4 = e.target.value;
  
  // Step 3: Decide on the SQL query to use and set it on the datasource
  if (lifeStage4 === 'all') {
    // If the value is "all" then we show all of the features, unfiltered
    source5.setQuery("SELECT * FROM northeast_regional_allocations");
  }
  else {
    // Else the value must be set to a life stage. Use it in an SQL query that will filter to that life stage.
    source5.setQuery("SELECT * FROM northeast_regional_allocations WHERE state = '" +lifeStage4+ "'");
    source6.setQuery("SELECT * FROM northeast_regional_allocations WHERE _2015_aggregate_county_plus_local < 0")
  }
  
  // Sometimes it helps to log messages, here we log the lifestage. You can see this if you open developer tools and look at the console.
  console.log('Dropdown changed to "' + lifeStage4 + '"');
});


////////////////////////////////////////////////////


/*
 * RESET BUTTON - Listen for changes on the layer picker
 */

// Step 1: Find the button by its class. If you are using a different class, change this.
var resetButton = document.querySelector('.resetbutton');

// Step 2: Add an event listener to the button. We will run some code whenever the button is clicked.
resetButton.addEventListener('click', function (e) {
  source.setQuery("SELECT * FROM western_regional_allocations");
  source2.setQuery('SELECT * FROM western_regional_allocations WHERE _2015_aggregate_county_plus_local = 0')
  source3.setQuery('SELECT * FROM south_regional_allocations');
  source4.setQuery('SELECT * FROM south_regional_allocations WHERE _2015_aggregate_county_plus_local = 0')
  source5.setQuery('SELECT * FROM northeast_regional_allocations');
  source6.setQuery('SELECT * FROM northeast_regional_allocations WHERE _2015_aggregate_county_plus_local = 0')
  source7.setQuery('SELECT * FROM midwest_regional_allocations');
  source8.setQuery('SELECT * FROM midwest_regional_allocations WHERE _2015_aggregate_county_plus_local = 0')
  
  // Sometimes it helps to log messages, here we log to let us know the button was clicked. You can see this if you open developer tools and look at the console.
  console.log('Reset Button was clicked');
});













////////////////////////////////////////////////////////

// Initialze data source
var source = new carto.source.SQL('SELECT * FROM western_regional_allocations');

// Create style for the data
var style = new carto.style.CartoCSS(`
  #layer {
    polygon-fill: ramp([_2015_aggregate_county_plus_local], (#fbe6c5, #f2a28a, #dc7176, #b24b65, #70284a), jenks);
  }
  #layer::outline {
    line-width: 1;
    line-color: #000000;
    line-opacity: 0.5;
  }
  #layer[zoom >= 8]::labels {
    text-name: [county];
    text-face-name: 'DejaVu Sans Book';
    text-size: 11;
    text-fill: #000000;
    text-label-position-tolerance: 0;
    text-halo-radius: 1;
    text-halo-fill: #6F808D;
    text-dy: 0;
    text-allow-overlap: true;
    text-placement: point;
    text-placement-type: dummy;
  }
  `);

// Add style to the data
// Note: any column you want to show up in the popup needs to be in the list of
// featureClickColumns below

var layer = new carto.layer.Layer(source, style, {
  featureClickColumns: ['state', 'county', '_2015_aggregate_county_plus_local']
});

layer.on('featureClicked', function (event) {
  
  var content = event.data['county'] + " County, " + event.data['state'] +
      "<br>Local Militarization by 2015 (USD): " + " $" + event.data['_2015_aggregate_county_plus_local'];
  
  
  var popup = L.popup();
  popup.setContent(content);
  
  popup.setLatLng(event.latLng);
  popup.openOn(map);
});





// Initialze data source
var source2 = new carto.source.SQL('SELECT * FROM western_regional_allocations WHERE _2015_aggregate_county_plus_local = 0');

// Create style for the data
var style2 = new carto.style.CartoCSS(`
  #layer {
    polygon-fill: #d3d3d3;
    polygon-opacity: 1;
  }
  #layer::outline {
    line-width: 1;
    line-color: #000000;
    line-opacity: 0.5;
  }
  `);

// Add style to the data
var layer2 = new carto.layer.Layer(source2, style2);


////////////////////////////////////////////////////////


// Initialze data source
var source3 = new carto.source.SQL('SELECT * FROM south_regional_allocations');

// Create style for the data
var style3 = new carto.style.CartoCSS(`
  #layer {
    polygon-fill: ramp([_2015_aggregate_county_plus_local], (#fbe6c5, #f2a28a, #dc7176, #b24b65, #70284a), jenks);
  }
  #layer::outline {
    line-width: 1;
    line-color: #000000;
    line-opacity: 0.5;
  }
  #layer[zoom >= 8]::labels {
    text-name: [county];
    text-face-name: 'DejaVu Sans Book';
    text-size: 11;
    text-fill: #000000;
    text-label-position-tolerance: 0;
    text-halo-radius: 1;
    text-halo-fill: #6F808D;
    text-dy: 0;
    text-allow-overlap: true;
    text-placement: point;
    text-placement-type: dummy;
  }
  `);

// Add style to the data
// Note: any column you want to show up in the popup needs to be in the list of
// featureClickColumns below

var layer3 = new carto.layer.Layer(source3, style3, {
  featureClickColumns: ['state', 'county', '_2015_aggregate_county_plus_local']
});

layer3.on('featureClicked', function (event) {
  
  var content3 = event.data['county'] + " County, " + event.data['state'] +
      "<br>Local Militarization by 2015 (USD): " + " $" + event.data['_2015_aggregate_county_plus_local'];
  
  
  var popup3 = L.popup();
  popup3.setContent(content3);
  
  popup3.setLatLng(event.latLng);
  popup3.openOn(map);
});




// Initialze data source
var source4 = new carto.source.SQL('SELECT * FROM south_regional_allocations WHERE _2015_aggregate_county_plus_local = 0');

// Create style for the data
var style4 = new carto.style.CartoCSS(`
  #layer {
    polygon-fill: #d3d3d3;
    polygon-opacity: 1;
  }
  #layer::outline {
    line-width: 1;
    line-color: #000000;
    line-opacity: 0.5;
  }
  `);

// Add style to the data
var layer4 = new carto.layer.Layer(source4, style4);


////////////////////////////////////////////////////////



// Initialze data source
var source5 = new carto.source.SQL('SELECT * FROM northeast_regional_allocations');

// Create style for the data
var style5 = new carto.style.CartoCSS(`
  #layer {
    polygon-fill: ramp([_2015_aggregate_county_plus_local], (#fbe6c5, #f2a28a, #dc7176, #b24b65, #70284a), jenks);
  }
  #layer::outline {
    line-width: 1;
    line-color: #000000;
    line-opacity: 0.5;
  }
  #layer[zoom >= 8]::labels {
    text-name: [county];
    text-face-name: 'DejaVu Sans Book';
    text-size: 11;
    text-fill: #000000;
    text-label-position-tolerance: 0;
    text-halo-radius: 1;
    text-halo-fill: #6F808D;
    text-dy: 0;
    text-allow-overlap: true;
    text-placement: point;
    text-placement-type: dummy;
  }
  `);

// Add style to the data
// Note: any column you want to show up in the popup needs to be in the list of
// featureClickColumns below

var layer5 = new carto.layer.Layer(source5, style5, {
  featureClickColumns: ['state', 'county', '_2015_aggregate_county_plus_local']
});

layer5.on('featureClicked', function (event) {
  
  var content5 = event.data['county'] + " County, " + event.data['state'] +
      "<br>Local Militarization by 2015 (USD): " + " $" + event.data['_2015_aggregate_county_plus_local'];
  
  
  var popup5 = L.popup();
  popup5.setContent(content5);
  
  popup5.setLatLng(event.latLng);
  popup5.openOn(map);
});

// Initialze data source
var source6 = new carto.source.SQL('SELECT * FROM northeast_regional_allocations WHERE _2015_aggregate_county_plus_local = 0');

// Create style for the data
var style6 = new carto.style.CartoCSS(`
  #layer {
    polygon-fill: #d3d3d3;
    polygon-opacity: 1;
  }
  #layer::outline {
    line-width: 1;
    line-color: #000000;
    line-opacity: 0.5;
  }
  `);

// Add style to the data
var layer6 = new carto.layer.Layer(source6, style6);


////////////////////////////////////////////////////////





// Initialze data source
var source7 = new carto.source.SQL('SELECT * FROM midwest_regional_allocations');

// Create style for the data
var style7 = new carto.style.CartoCSS(`
  #layer {
    polygon-fill: ramp([_2015_aggregate_county_plus_local], (#fbe6c5, #f2a28a, #dc7176, #b24b65, #70284a), jenks);
  }
  #layer::outline {
    line-width: 1;
    line-color: #000000;
    line-opacity: 0.5;
  }
  #layer[zoom >= 8]::labels {
    text-name: [county];
    text-face-name: 'DejaVu Sans Book';
    text-size: 11;
    text-fill: #000000;
    text-label-position-tolerance: 0;
    text-halo-radius: 1;
    text-halo-fill: #6F808D;
    text-dy: 0;
    text-allow-overlap: true;
    text-placement: point;
    text-placement-type: dummy;
  }
  `);

// Add style to the data
// Note: any column you want to show up in the popup needs to be in the list of
// featureClickColumns below

var layer7 = new carto.layer.Layer(source7, style7, {
  featureClickColumns: ['state', 'county', '_2015_aggregate_county_plus_local']
});

layer7.on('featureClicked', function (event) {
  
  var content7 = event.data['county'] + " County, " + event.data['state'] +
      "<br>Local Militarization by 2015 (USD): " + " $" + event.data['_2015_aggregate_county_plus_local'];
  
  
  var popup7 = L.popup();
  popup7.setContent(content7);
  
  popup7.setLatLng(event.latLng);
  popup7.openOn(map);
});


// Initialze data source
var source8 = new carto.source.SQL('SELECT * FROM midwest_regional_allocations WHERE _2015_aggregate_county_plus_local = 0');

// Create style for the data
var style8 = new carto.style.CartoCSS(`
  #layer {
    polygon-fill: #d3d3d3;
    polygon-opacity: 1;
  }
  #layer::outline {
    line-width: 1;
    line-color: #000000;
    line-opacity: 0.5;
  }
  `);

// Add style to the data
var layer8 = new carto.layer.Layer(source8, style8);


////////////////////////////////////////////////////////
// Initialze data source
var source9 = new carto.source.SQL('SELECT * FROM us_continental_state_borders');

// Create style for the data
var style9 = new carto.style.CartoCSS(`
  #layer {
    polygon-fill: #d3d3d3;
    polygon-opacity: 0;
  }
  #layer::outline {
    line-width: 1.25;
    line-color: black;
    line-opacity: 1;
  }
  `);

// Add style to the data
var layer9 = new carto.layer.Layer(source9, style9);


/////////////////////////////////////////////////////

// Add the data to the map as seperate (8) layers
client.addLayers([layer, layer2, layer3, layer4, layer5, layer6, layer7, layer8, layer9]);
client.getLeafletLayer().addTo(map);



//SQL API//

// Make SQL to get the summary data you want
// var countSql10 = 'SELECT AVG(_2015_aggregate_county_plus_local) FROM western_regional_allocations';
// var countSql11 = 'SELECT AVG(_2015_aggregate_county_plus_local) FROM south_regional_allocations';
// var countSql12 = 'SELECT AVG(_2015_aggregate_county_plus_local) FROM midwest_regional_allocations';
// var countSql13 = 'SELECT AVG(_2015_aggregate_county_plus_local) FROM northeast_regional_allocations';
// // Request the data from Carto using fetch.
// // You will need to change 'brelsfoeagain' below to your username, otherwise this should work.
// fetch('https://graydon-carter.carto.com/api/v2/sql/?q=' + countSql10)
//   .then(function (response10) {
//     return response10.json();
//   })
//   .then(function (data10) {
//     // All of the data returned is in the response variable
//     console.log(data10);

//     // The sum is in the first row's sum variable
//     var count10 = data10.rows[0].avg;
 
// // Get the sidebar container element
//     var sidebarContainer = document.querySelector('.sidebar-feature-content');

// // Add the text including the sum to the sidebar
//     sidebarContainer.innerHTML = '<div>By 2015, _______ Counties Averaged _______ in Localized, Tactical Allocations: </br></br>* Western - $ ' + count10 + ' </br>* Southern - $ ' + count10 + ' </br>* Mid-Western - $ ' + count10 + ' </br>* Northeastern - $ ' + count10 + '</div>';
//   });

var westernAvgSql = 'SELECT AVG(_2015_aggregate_county_plus_local) FROM western_regional_allocations';

// Request the data from Carto using fetch.
// You will need to change 'brelsfoeagain' below to your username, otherwise this should work.
fetch('https://graydon-carter.carto.com/api/v2/sql/?q=' + westernAvgSql)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // All of the data returned is in the response variable
    console.log(data);

    // The sum is in the first row's sum variable
    var count10 = data.rows[0].avg;
 
// Get the sidebar container element
    var westernAverage = document.querySelector('.western-average');

// Add the text including the sum to the sidebar
    westernAverage.innerHTML = Math.round(count10*100)/100;
  });

var southernAvgSql = 'SELECT AVG(_2015_aggregate_county_plus_local) FROM south_regional_allocations';

// Request the data from Carto using fetch.
// You will need to change 'brelsfoeagain' below to your username, otherwise this should work.
fetch('https://graydon-carter.carto.com/api/v2/sql/?q=' + southernAvgSql)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // All of the data returned is in the response variable
    console.log(data);

    // The sum is in the first row's sum variable
    var count11 = data.rows[0].avg;
 
// Get the sidebar container element
    var westernAverage = document.querySelector('.southern-average');

// Add the text including the sum to the sidebar
    westernAverage.innerHTML = Math.round(count11*100)/100;
  });

var midwestAvgSql = 'SELECT AVG(_2015_aggregate_county_plus_local) FROM midwest_regional_allocations';

// Request the data from Carto using fetch.
// You will need to change 'brelsfoeagain' below to your username, otherwise this should work.
fetch('https://graydon-carter.carto.com/api/v2/sql/?q=' + midwestAvgSql)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // All of the data returned is in the response variable
    console.log(data);

    // The sum is in the first row's sum variable
    var count12 = data.rows[0].avg;
 
// Get the sidebar container element
    var midwestAverage = document.querySelector('.midwest-average');

// Add the text including the sum to the sidebar
    midwestAverage.innerHTML = Math.round(count12*100)/100;
  });

var northeastAvgSql = 'SELECT AVG(_2015_aggregate_county_plus_local) FROM northeast_regional_allocations';

// Request the data from Carto using fetch.
// You will need to change 'brelsfoeagain' below to your username, otherwise this should work.
fetch('https://graydon-carter.carto.com/api/v2/sql/?q=' + northeastAvgSql)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // All of the data returned is in the response variable
    console.log(data);

    // The sum is in the first row's sum variable
    var count13 = data.rows[0].avg;
 
// Get the sidebar container element
    var northeastAverage = document.querySelector('.northeast-average');

// Add the text including the sum to the sidebar
    northeastAverage.innerHTML = Math.round(count13*100)/100;
  });