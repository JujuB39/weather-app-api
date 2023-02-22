// Gathering all elements needed from HTML 
var inputEl = document.querySelector(".search");
var submit = document.querySelector(".submit");
var form = document.querySelector(".form");
var apikey = "eaeb1de27b6bfa327763903032ee3804";
var currentForecast = document.querySelector('.forecast');
var fiveDayForecast = document.querySelector('.five-day-forecast');
var dayOne = document.getElementById("day-one");
var dayTwo = document.getElementById("day-two");
var dayThree = document.getElementById("day-three");
var dayFour = document.getElementById("day-four");
var dayFive = document.getElementById("day-five");
var pastSearch = document.querySelector('.past-search');
var currentDate = moment().format('MMM DD YYYY, hh:mm A');

// search Information
var cityName = '';
console.log(cityName)

// Store city name into Search History local storage, pushing in citynames to local storage
var formSubmit = function (event) {
    event.preventDefault();
    //Get search value 
     // pastSearch.push(cityName)
    // localStorage.getItem('Previous Search', JSON.stringify(pastSearch))
    // localStorage.getItem("City", cityName)
    // Store city name into Search History local storage
    handleSearch()
}

//fetch api
function getForecast (cityName) {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apikey)

    .then(function(response) {
        return response.json()
    })

    .then(function(data) {
        currentForecast.innerHTML = "";
        var cityHeader = document.createElement("h3");
        var dateHeader = document.createElement("h4");
        var icon = document.createElement("img");
        var temperature = document.createElement("p");
        var humidity = document.createElement("p");
        var windspeed = document.createElement("p");

        cityHeader.textContent = cityName.toUpperCase()
        dateHeader.textContent = currentDate
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        temperature.textContent = `Temperature: ${data.main.temp} °F`
        humidity.textContent = `Humidity: ${data.main.humidity} %`;
        windspeed.textContent = `Windspeed: ${data.wind.speed} MPH`;

        //append to current weather
        currentForecast.append(cityHeader);
        currentForecast.append(dateHeader);
        currentForecast.append(temperature);
        currentForecast.append(humidity);
        currentForecast.append(windspeed);
        currentForecast.append(icon);
        getFiveDayForecast(data.coord.lat, data.coord.lon)
    });
}

function getFiveDayForecast (latitude, longitude) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + apikey)

    .then(function(response) {
        return response.json()
    })

    .then(function(data) {
        [dayOne, dayTwo, dayThree, dayFour, dayFive].forEach((day) => {
            var dateHeader = document.createElement("h4");
            var icon = document.createElement("img");
            var temperature = document.createElement("p");
            var humidity = document.createElement("p");
            var windspeed = document.createElement("p");

            dateHeader.textContent = currentDate
            icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            temperature.textContent = `Temperature: ${data.main.temp} °F`
            humidity.textContent = `Humidity: ${data.main.humidity} %`;
            windspeed.textContent = `Windspeed: ${data.wind.speed} MPH`;

        })



        
        

        // //append to current weather
        // currentForecast.append(cityHeader);
        // currentForecast.append(dateHeader);
        // currentForecast.append(temperature);
        // currentForecast.append(humidity);
        // currentForecast.append(windspeed);
        // currentForecast.append(icon);

    })
}
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

      //is it possible to loop through each data in the dom and create the same elements ASK????
      
      //then ask if you can also loop through text content as well not sure??? 



        //Need City Name (name) /date 
            
        // Need Icon representation
            //weather[0].icon
        // Need Temp
            //data.main.temp
        //Need Humidity
            //data.main.humidity
        // Need wind speed 
            //data.wind.speed



        //Create Elements needed 

        //var city = 






function handleSearch() {
    getForecast(inputEl.value);
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




form.addEventListener('submit', formSubmit)