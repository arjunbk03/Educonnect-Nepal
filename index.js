let map;
const nepal = { lat: 28.3949, lng: 84.1240 };

/**
 * Creates a control that recenters the map on Nepal.
 */
function createCenterControl(map) {
  const controlButton = document.createElement("button");

  // Set CSS for the control.
  controlButton.classList.add('buttonStyle');

  controlButton.textContent = "Center Map";
  controlButton.title = "Click to recenter the map";
  controlButton.type = "button";
  // Setup the click event listeners: simply set the map to Nepal.
  controlButton.addEventListener("click", () => {
    map.setCenter(nepal);
  });
  return controlButton;
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: nepal,
  });

  // Define some locations for organisations , 
  var organisations = [
    {name: "Collaborative School's Network", location: {lat: 27.686763080043473, lng: 85.32813231613756}}, // CSN
    {name: "Maya Universe", location: {lat: 28.06531556211437, lng: 84.3226431814753}}, // Maya Universe KTM
    {name: "Maya Universe SagraMatha", location: {lat:27.214262189172263 , lng: 86.62834811684296}}, // Maya Universe Sagarmatha
    {name: "Maya Universe Apsara", location: {lat:28.015268458358392 , lng: 84.29465622029666}}, // Maya Universe Sagarmatha
    {name: "Maya Universe Academy", location: {lat:28.083139884056983 , lng: 84.33310836564743}}, // Maya Universe Sagarmatha
    {name: "Save the Children", location: {lat: 27.704435410079615, lng: 85.35081347989743}}, //Save the Children Nepal
    {name: "Plan International", location: {lat: 27.685386214867748, lng:85.3152165570225}}, //Plan International Nepal
    {name: "World Vision", location: {lat:27.67005281635616, lng:85.31366759561045}}, //World vision
    {name: "Teach for Nepal", location: {lat:27.7101266708403, lng:85.31584108845894}},//TFN Kathmandu
    {name: "United World Schools", location: {lat:27.73967429327601, lng:85.33628812924816}},//UWC Kathmandu
    {name: "National Campaign for Education Nepal", location: {lat:27.684259641565617, lng:85.31212091088322}},
  ];
  // Add a markers for organisations
  organisations.forEach(function(org) {
    var marker = new google.maps.Marker({position: org.location, map: map});
    var infowindow = new google.maps.InfoWindow({
      content: org.name
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  });

  // Create the DIV to hold the control.
  const centerControlDiv = document.createElement("div");
  // Create the control.
  const centerControl = createCenterControl(map);

  // Append the control to the DIV.
  centerControlDiv.appendChild(centerControl);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
}

window.onload = initMap;

document.getElementById("orgButton").addEventListener("click", function() {
    var mapDiv = document.getElementById("map");
    var header = document.getElementById("orgHeader");  // Get the header

    if(mapDiv.style.height === "500px") {
        mapDiv.style.height = "0";
        header.style.display = "none";  // Hide the header
    } else {
        mapDiv.style.height = "500px";
        header.style.display = "block";  // Show the header
    }
});


  
  
