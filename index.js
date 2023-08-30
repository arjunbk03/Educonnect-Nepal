//for the homepage image slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    slides[i].classList.remove("fade"); // removed the fade class
  }
  
  slides[slideIndex-1].style.display = "block";  
  slides[slideIndex-1].classList.add("fade"); // added the fade class
}





//this is for the Map

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
    {name: "United World Schools", location: {lat:27.73967429327601, lng:85.33628812924816}},//UWC Kathmandu
    {name: "National Campaign for Education Nepal", location: {lat:27.684259641565617, lng:85.31212091088322}}, //National Campaign for Education Nepal
  ];;

  // Add markers for organisations
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


//This is for the partnership section: 
document.getElementById('moreInfoBtn').addEventListener('click', function() {
  document.getElementById('modal').style.display = "block";
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('modal').style.display = "none";
});



//Form to contact me: 
//I'm using formspree to get the form to my email:
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    fetch('https://formspree.io/f/xbjevblr', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            alert('Your message has been sent. Thank you!');
            return;
        }
        alert('Error: ' + response.statusText);
    }).catch(function(error) {
        alert('There was a problem with the request: ' + error.message);
    });
});

  
  
