const apiKey = "7c8e2b75b041a8fd73cc464e914cc620";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city) {
    const response = await fetch(`${apiUrl}&appid=${apiKey}&q=${city}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector("p.humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector("p.wind").innerHTML = `${data.wind.speed}km/hr`;

        if (data.weather[0].main == "Clear") {
            document.querySelector(".weather-icon").innerHTML = `<i class="fa-regular fa-sun"></i>`;
        }

        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon").innerHTML = `<i class="fa-solid fa-cloud"></i>`;
        }

        if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon").innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;
        }

        if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon").innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i>`;
        }

        if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon").innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
        }

        if (data.weather[0].main == "Snow") {
            document.querySelector(".weather-icon").innerHTML = `<i class="fa-regular fa-snowflake"></i>`;
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click", _ => {
    checkWeather(searchBox.value);
})