const request = require('request');
const weatherUrl = "http://api.weatherstack.com/current?access_key=c8b816ec91b6de21953ef002b6cf9e51&units=f";

const getWeatherByCoordinates = (latitude, longitude, callback) => {
  request({
    url: `${weatherUrl}&query=${latitude},${longitude}`,
    json: true
  }, (e, {body}) => {
    if (e) {
      callback("Error communication with API", undefined);
      return;
    }
    if (body.error) {
      callback("Error finding the weather at that location", undefined);
      return;
    }
    const {temperature, feelslike: feelsLikeTemperature} = body.current;
    callback(undefined, {
      temperature,
      feelsLikeTemperature,
      description: body.current.weather_descriptions[0],
    });
  });
};
exports.getWeatherByCoordinates = getWeatherByCoordinates;
