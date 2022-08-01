var searchBoxContainerEL = document.querySelector(".searchBoxContainer")
var  cityInputEl = document.querySelector(".form-input")

var fullUrl =  "https://api.openweathermap.org/data/2.5/weather?q=NewYork&units=imperial&appid=d12707350df08c4703683ba822b2a53b";


var defaultapiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
var city = "cityInputEl";
var myApiKey = "&appid=d12707350df08c4703683ba822b2a53b";
var farenheit = "&units=imperial"

var apiUrl = defaultapiUrl + city + farenheit + myApiKey;

console.log(apiUrl);






var formSubmitHandler = function(event) {
    // prevent page from refreshing
    event.preventDefault();
  
    // get value from input element
    var cityInput = cityInputEl.value.trim();

    