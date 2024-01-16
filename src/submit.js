import getWeatherInfo from "./getWeatherInfo";

// Submit button and display logic
const submit = () => {
  const $submitButton = document.querySelector("#submit");
  const $input = document.querySelector("#input");

  const $name = document.getElementById("name");
  const $region = document.getElementById("region");
  const $country = document.getElementById("country");

  const $min = document.querySelector("#min");
  const $max = document.querySelector("#max");
  const $avg = document.querySelector("#avg");

  const $conditions = document.querySelector("#conditions");
  const $condition = document.querySelector("#condition");
  const conditionImg = document.createElement("img");

  const $rain = document.getElementById("rain");
  const $snow = document.getElementById("snow");

  $submitButton.addEventListener("click", async () => {
    //document.addEventListener("DOMContentLoaded", async () => { debug
    const data = await getWeatherInfo($input.value);
    console.log(data);

    $name.textContent = `Name: ${data.location.name}`;
    $region.textContent = `Region: ${data.location.region}`;
    $country.textContent = `Country: ${data.location.country}`;

    $min.textContent =
      "Min temp (F): " + data.forecast.forecastday[0].day.mintemp_f;
    $max.textContent = `Max temp (F): ${data.forecast.forecastday[0].day.maxtemp_f}`;
    $avg.textContent = `Avg temp (F): ${data.forecast.forecastday[0].day.avgtemp_f}`;

    conditionImg.src = data.current.condition.icon;
    $conditions.append(conditionImg);
    $input.value = "";
    $condition.textContent = data.current.condition.text;

    $rain.textContent =
      "Rain: " + data.forecast.forecastday[0].day.daily_chance_of_rain + "%";
    $snow.textContent =
      "Snow: " + data.forecast.forecastday[0].day.daily_chance_of_snow + "%";
  });
};

export default submit;
