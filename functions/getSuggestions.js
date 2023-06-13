const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const { REACT_APP_GEOAPIFY } = process.env;
  let params = JSON.parse(event.body);
  const { search } = params;
  const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${search}&format=json&apiKey=${REACT_APP_GEOAPIFY}`;
  try {
    const suggestions = await fetch(url);
    const suggJson = await suggestions.json();
    return {
      statusCode: 200,
      body: JSON.stringify(suggJson)
    };
  } catch (err) {
    return { statusCode: 422, body: {error: err.stack} };
  }
};