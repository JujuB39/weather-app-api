// Gathering all elements needed from HTML 
var inputEl = document.querySelector(".search");
var form = document.querySelector(".form");
var apikey = "eaeb1de27b6bfa327763903032ee3804";
var currentForecast = document.querySelector('.forecast');
var fiveDayForecast = document.querySelector('.five-day-forecast');
//maybe have something in here for each day 
var pastSearch = document.querySelector('.past-search');
var currentDate = moment().format();


// search Information
var cityName = inputEL.value;

var formSubmit = function (event) {
    event.preventDefault();
    //Get search value 
    var cityName = inputEl.value;
    // Store city name into Search History local storage


}

//feth api
function getForecast (event) {
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + inputEl + "&limit=1&appid=" + apikey)

    .then(function(response) {
        return response.json()
    })

    .then(function(data) {
        console.log(data.results)

      })

      currentForecast.innerHTML = "";
      var cityHeader = document.createElement("h3");
      var dateHeader = document.createElement("h4");
      var icon = document.createElement("img");
      var temperature = document.createElement("p");
      var humidity = document.createElement("p");
      var windspeed = document.createElement("p");

      cityHeader.textContent = 
      dateHeader.textContent =
      icon.src = `\\url + data.list[0].weather.icon + finish url` 
      temperature.textContent = `Temperature: ${data.list[0].main.temp} °F`
      humidity.textContent = `Humidity: ${data.list[0].main.humidity} %`;
      windspeed.textContent = `Windspeed: ${data.list[0].wind.speed} MPH`;

      //Maybe append to current weather
      currentForecast.append(cityHeader);
      currentForecast.append(dateHeader);
      currentForecast.append(temperature);
      currentForecast.append(humidity);
      currentForecast.append(windspeed);


      // can use the following for 5 day forecast 
      //const url
      // const result
      //var latitutde = data.city.coord.lat
      //var longitude = data.city.coord.lon

      //is it possible to loop through each data in the dom and create the same elements ASK????
      
      //then ask if you can also loop through text content as well not sure??? 



        //Need City Name (name) /date 
            
        // Need Icon representation
            //list.weather.icon
        // Need Temp
            //list.main.temp
        //Need Humidity
            //list.main.humidity
        // Need wind speed 
            //list.wind.speed



        //Create Elements needed 

        //var city = 
    }
}

   
// function for search handler
// function searchHandler(event) {
//     event.preventdefault()
//     var location = input.value.trim()
//     pastSearchCities.push(location)
//     localStorage.getItem("cities", JSON.stringify(pastSeach))
//     localStorage.getItem("city", location)
// }

//function to renderpastcities 


//FOr future 5 day forecasts
// var cityandDateHeader = document.createElement("h3");
// var icon = document.createElement("img");
// var temperature = document.createElement("p");
// var Humidity = document.createElement("p");
// var Windspeed = document.createElement("p"); 
      //Need  /date 
        // Need Icon representation
        // Need Temp
        //Need Humidity
        // Need wind speed 

// inputEl.addEventListener('search', formSubmit)