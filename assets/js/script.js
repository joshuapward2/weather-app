
// containers and buttons pulled over

var searchBoxContainerEL = document.getElementById("searchBoxContainer");
var  cityInputEl = document.getElementById("form-input");
var searchButton = document.getElementById("btn");

// Full api before breaking it up

//var fullUrl =  "https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&appid=d12707350df08c4703683ba822b2a53b";
//console.log(fullUrl);

// Api broken up

var defaultapiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
var myApiKey = "&appid=d12707350df08c4703683ba822b2a53b";
var farenheit = "&units=imperial"

var formSubmitHandler = function(event) {

        // prevent page from refreshing
       event.preventDefault();

       // Fetch the search input

      var city = cityInputEl.value.trim()
var apiUrl = defaultapiUrl + city + farenheit + myApiKey;
      
fetch(apiUrl).then(function(response) {
    console.log(response);
  //request response
    if(response.ok) {

        response.json().then(function(data1) {
            console.log(data1);
  
      //second fetch
    var fiveDayForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data1.coord.lat}&lon=${data1.coord.lon}&units=imperial&appid=d12707350df08c4703683ba822b2a53b`;

  
    fetch(fiveDayForecastUrl).then(function(response) {
        response.json().then(function(data2) {
            console.log(data2);
            document.querySelector("#temp0").textContent = data2.daily[0].temp.day;
            //document.querySelector("#wind0").textContent =
        })
        console.log(response);

    })


// Store in local Storage

localStorage.setItem(city,JSON.stringify(data1));
displayWeatherData(data1);
        })
    }
})

// get value and create elements 


function displayWeatherData (data1) {

    


}



//        cityInputEl.value.trim();
 }

// Event call function

 
//Fetch function


searchButton.addEventListener("click", formSubmitHandler);









// Save responses to local Storage









// var formSubmitHandler = function(event) {



//     // prevent page from refreshing
//     event.preventDefault();
  
//     // get value from input element
//     var cityInput = cityInputEl.value.trim();

    