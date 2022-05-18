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

//MOBILE NAV BUTTON//

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//Smooth Scroll
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
