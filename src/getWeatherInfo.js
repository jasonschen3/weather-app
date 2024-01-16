// Returns weather info of a given input as a json file
const getWeatherInfo = async function (input = "") {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=4ef3b1647e484def825181322241401&q=${input}&days=1&aqi=no&alerts=no`,
    { mode: "cors" }
  );

  const weatherData = await response.json();
  return weatherData;
};

export default getWeatherInfo;
