const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const { REACT_APP_OPEN_WEATHER } = process.env;
  const params = JSON.parse(event.body);
  const { lat, lon } = params;
  const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${REACT_APP_OPEN_WEATHER}`;
  const furl=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${REACT_APP_OPEN_WEATHER}`;
  const aurl=`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${REACT_APP_OPEN_WEATHER}`;
  try {
    const weatherStream = await fetch(url);
    const weatherJson = await weatherStream.json();
    const forecastStream= await fetch(furl);
    const forecastJson=await forecastStream.json();
    const airStream = await fetch(aurl);
    const airJson = await airStream.json();
    const temp={...weatherJson, ...forecastJson,air: {...airJson}};
    return {
      statusCode: 200,
      body: JSON.stringify(temp)
    };
  } catch (err) {
    return { statusCode: 422, body: err.stack };
  }
};