"use strict";

async function getWeather() {
  try {
    const response = await axios.get(
      "http://dataservice.accuweather.com/currentconditions/v1/327351?apikey=8arva3wAj3hpbjOnGIFqI0av5aD0UYxt"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getWeather();
