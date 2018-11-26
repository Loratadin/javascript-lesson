searchButton.addEventListener('click', searchWeather);
function searchWeather () {
    var cityName = searchCity.value;
    if (cityName.trim().length == 0) {
        return alert("Please, enter a city name");
    }
    var http = new XMLHttpRequest();
    var apiKey = config.API_KEY;
    var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&q=' + cityName
}