var searchBoxContainerEL = document.querySelector(".searchBoxContainer")
var  cityInputEl = document.querySelector(".form-input")





var formSubmitHandler = function(event) {
    // prevent page from refreshing
    event.preventDefault();
  
    // get value from input element
    var cityInput = cityInputEl.value.trim();

    