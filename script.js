"use strict";

const weather = document.querySelector("#weather");
const button = document.querySelector("#weather-button");

const updateWeather = async () => {
  const weatherText = await getWeather();
  console.log(weatherText);
  const newLI = document.createElement("LI");
  newLI.append(weatherText);
  weather.append(newLI);
};

async function getWeather() {
  try {
    const config = { headers: { Accept: "application/json" } };
    const response = await axios.get(
      "http://dataservice.accuweather.com/currentconditions/v1/327351?apikey=8arva3wAj3hpbjOnGIFqI0av5aD0UYxt",
      config
    );
    // console.log(response.data[0].WeatherText);
    return response.data[0].WeatherText;
  } catch (error) {
    console.error(error);
  }
}

button.addEventListener("click", updateWeather);
