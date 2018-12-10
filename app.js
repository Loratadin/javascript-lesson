searchButton.addEventListener('click', searchWeather);
function searchWeather () {
    var cityName = searchCity.value;
    if (cityName.trim().length == 0) {
        return alert("Please, enter a city name");
    }
    var http = new XMLHttpRequest();
    var apiKey = API_KEY;
    var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&q=' + cityName + '&units=metric&appid=' + apiKey;
    var method = 'GET';

    http.open(method, url);
    http.onreadystatechange = function() {
        if(http.readyState == XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
            temperature = data.main.temp.toFixed() + ' F.';
            updateWeather(data);
        } else if(http.readyState === XMLHttpRequest.DONE) {
            alert("Something went wrong!");
        }
    };
    http.send();
}

function updateWeather(data) {
    weatherCity.textContent = data.cityName;
    weatherDescription.textContent = data.description;
    weatherTemperature.textContent = data.temperature;

    weatherBox.style.display = 'block';
}