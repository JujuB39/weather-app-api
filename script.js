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
var currentDate = moment().format('MMM DD YYYY');

var pastSearchArray = [];

// Store city name into Search History local storage, pushing in citynames to local storage
var formSubmit = function (event) {
    event.preventDefault();
    //Get search value 
    var city = inputEl.value;
    pastSearchArray.push(city);
    localStorage.setItem('Previous Search', JSON.stringify(pastSearchArray))
    localStorage.setItem("City", city)
    handleSearch()

    pastSearch.innerHTML = "Previous Search"
    var previousCities = document.createElement("ul")
    pastSearchArray.forEach((city) => {
        var cityList = document.createElement("li");
        cityList.textContent = city;
        previousCities.appendChild(cityList);
    })
    pastSearch.appendChild(previousCities)
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
        let i = 7;
        [dayOne, dayTwo, dayThree, dayFour, dayFive].forEach((day) => {
            var dateHeader = document.createElement("h4");
            var icon = document.createElement("img");
            var temperature = document.createElement("p");
            var humidity = document.createElement("p");
            var windspeed = document.createElement("p");

            dateHeader.textContent = data.list[i].dt_txt.split(" ")[0];
            icon.src = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`
            temperature.textContent = `Temperature: ${data.list[i].main.temp} °F`
            humidity.textContent = `Humidity: ${data.list[i].main.humidity} %`;
            windspeed.textContent = `Windspeed: ${data.list[i].wind.speed} MPH`;

            i += 8;

            //append to each day 
            day.append(dateHeader);
            day.append(temperature);
            day.append(humidity);
            day.append(windspeed);
            day.append(icon);

        })
      
    })

}


function handleSearch() {
    getForecast(inputEl.value);
}


form.addEventListener('submit', formSubmit)