
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
            //document.querySelector("#name").textContent = data1.weather[0]

  
      //second fetch
    var fiveDayForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data1.coord.lat}&lon=${data1.coord.lon}&units=imperial&appid=d12707350df08c4703683ba822b2a53b`;

  
    fetch(fiveDayForecastUrl).then(function(response) {
        response.json().then(function(data2) {
            console.log(data2);

            //Date
            var todaysDate = moment().format("L");

            document.querySelector(".nameAndDate").textContent = "Weather Forecast for " + todaysDate;
        

            //Daily weather forecast rendering in list in larger container

            document.querySelector("#temp0").textContent = "Daily Temperature: " + data2.daily[0].temp.day + " ℉";
            document.querySelector("#wind0").textContent = "Daily wind speed: " + data2.daily[0].wind_speed + " M.P.H";
            document.querySelector("#humidity0").textContent = "Daily humidity index: " + data2.daily[0].humidity + " %";
            document.querySelector("#uv0").textContent = "Daily UV index " + data2.daily[0].uvi;
            //document.querySelector("#icon").textContent = data2.daily[0].weather[0];


            // 5-day weather forecast rendering on cards
            var day1 = moment().add(1, 'day').format('l');
            var dateEl1 = document.querySelector("#name1")
            dateEl1.textContent = day1;
            document.querySelector("#temp1").textContent = "Temp: " + data2.daily[1].temp.day + " ℉"
            document.querySelector("#wind1").textContent =  "Wind: " + data2.daily[1].wind_speed + " M.P.H";
            document.querySelector("#humidity1").textContent = "Humidity: " + data2.daily[1].humidity + " %";
            //document.querySelector("#temp0").textContent =

            // day 2
            var day2 =  moment().add(2, 'day').format('l');
            var dateEl2 = document.querySelector("#name2")
            dateEl2.textContent = day2;
            document.querySelector("#temp2").textContent = "Temp: " + data2.daily[2].temp.day + " ℉"
            document.querySelector("#wind2").textContent =  "Wind: " + data2.daily[2].wind_speed + " M.P.H";
            document.querySelector("#humidity2").textContent = "Humidity: " + data2.daily[2].humidity + " %";
            //document.querySelector("#temp0").textContent =
            

            // day 3
            var day3 =  moment().add(3, 'day').format('l');
            var dateEl3 = document.querySelector("#name3")
            dateEl3.textContent = day3;
            document.querySelector("#temp3").textContent = "Temp: " + data2.daily[3].temp.day + " ℉"
            document.querySelector("#wind3").textContent = "Wind: " + data2.daily[3].wind_speed + " M.P.H";
            document.querySelector("#humidity3").textContent = "Humidity: " + data2.daily[3].humidity + " %";
            //document.querySelector("#temp0").textContent =
            

            // day 4
            var day4 =  moment().add(4, 'day').format('l');
            var dateEl4 = document.querySelector("#name4")
            dateEl4.textContent = day4;
            document.querySelector("#temp4").textContent = "Temp: " + data2.daily[4].temp.day + " ℉"
            document.querySelector("#wind4").textContent = "Wind: " + data2.daily[4].wind_speed + " M.P.H";
            document.querySelector("#humidity4").textContent = "Humidity: " + data2.daily[4].humidity + " %";
            //document.querySelector("#temp0").textContent =
            

            // day 5
            var day5 =  moment().add(5, 'day').format('l');
            var dateEl5 = document.querySelector("#name5")
            dateEl5.textContent = day5;
            document.querySelector("#temp5").textContent = "Temp: " + data2.daily[5].temp.day + " ℉"
            document.querySelector("#wind5").textContent = "Wind: " + data2.daily[5].wind_speed + " M.P.H";
            document.querySelector("#humidity5").textContent = "Humidity: " + data2.daily[5].humidity + " %";
            //document.querySelector("#temp0").textContent =

        
            
            
            



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

    