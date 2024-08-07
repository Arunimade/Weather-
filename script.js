const apiKey = '235095aea538ccc395e4f3f8982fdad5';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    try {
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert('Error fetching weather data');
        console.error(error);
    }
}

function displayWeather(data) {
    document.getElementById('cityName').innerText = data.name;
    document.getElementById('description').innerText = data.weather[0].description;
    document.getElementById('tempValue').innerText = data.main.temp;
    document.getElementById('humidityValue').innerText = data.main.humidity;
    document.getElementById('forecastValue').innerText = "N/A"; // Add forecast logic if necessary
    document.getElementById('alertValue').innerText = "N/A"; // Add alerts logic if necessary
}
