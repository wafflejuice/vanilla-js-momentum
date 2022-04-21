function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.querySelectorAll("#weather span");

            const name = data.name;
            const weather = data.weather[0].main;
            const temperature = data.main.temp;

            weatherContainer[0].innerText = name;
            weatherContainer[1].innerText = weather;
            weatherContainer[2].innerText = temperature;
        });
}

function onGeoError() {
    console.log("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);