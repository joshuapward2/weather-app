var searchBoxContainerEL = document.querySelector(".searchBoxContainer");
var  cityInputEl = document.querySelector(".form-input");
var searchButton = document.querySelector(".btn");

var fullUrl =  "https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&appid=d12707350df08c4703683ba822b2a53b";
console.log(fullUrl);

var defaultapiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
var city = "tampa";
var myApiKey = "&appid=d12707350df08c4703683ba822b2a53b";
var farenheit = "&units=imperial"
var apiUrl = defaultapiUrl + city + farenheit + myApiKey;

function getApi() {


searchButton.addEventListener("click", getApi)



fetch(apiUrl).then(function(response) {
    console.log(response);
    var apiUrl = defaultapiUrl + city + farenheit + myApiKey;

    //request response
    if(response.ok) {
        response.json().then(function(data1) {
            console.log(data1);

console.log(apiUrl);

        

 })
        }
    })
}
getApi();



// var formSubmitHandler = function(event) {
//     // prevent page from refreshing
//     event.preventDefault();
  
//     // get value from input element
//     var cityInput = cityInputEl.value.trim();

    