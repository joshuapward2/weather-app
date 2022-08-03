
// containers and buttons pulled over

var searchBoxContainerEL = document.getElementById("searchBoxContainer");
var  cityInputEl = document.getElementById("form-input");
var searchButton = document.getElementById("btn");

// Full api before breaking it up

var fullUrl =  "https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&appid=d12707350df08c4703683ba822b2a53b";
console.log(fullUrl);

// Api broken up

var defaultapiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
var myApiKey = "&appid=d12707350df08c4703683ba822b2a53b";
var farenheit = "&units=imperial"

var formSubmitHandler = function(event) {
        // prevent page from refreshing

       event.preventDefault();
      var city = cityInputEl.value.trim()
var apiUrl = defaultapiUrl + city + farenheit + myApiKey;
      
fetch(apiUrl).then(function(response) {
    console.log(response);


    //request response

    if(response.ok) {
        response.json().then(function(data1) {
            console.log(data1);


localStorage.setItem(city,JSON.stringify(data1));
displayWeatherData(data1);
        })
    }
})
// get value from input element


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

    