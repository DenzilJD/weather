const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const { REACT_APP_OPEN_WEATHER } = process.env;
  const params = JSON.parse(event.body);
  const { lat, lon } = params;
  const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${REACT_APP_OPEN_WEATHER}`;
  try {
    const weatherStream = await fetch(url);
    const weatherJson = await weatherStream.json();
    return {
      statusCode: 200,
      body: JSON.stringify(weatherJson)
    };
  } catch (err) {
    return { statusCode: 422, body: err.stack };
  }
};