const API_Key = `b19200cb4949d6830162b172ede9d088`;

const form = document.querySelector('#search-form');
const search = document.querySelector('#city-input');
const weather = document.querySelector('#weather-result');

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            displayWeather(data);
        } else {
            weather.innerHTML = `<p>City not found</p>`;
        }
    } catch (error) {
        console.error("Error fetching the weather data:", error);
    }
};

const displayWeather = (data) => {
    const temp = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    weather.innerHTML = `
        <img src="${iconUrl}" alt="${weatherDescription}">
        <h2>${temp} ℃</h2>
        <h4>${weatherDescription}</h4>
    `;
};

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const city = search.value.trim();
    if (city) {
        getWeather(city);
    }
});
