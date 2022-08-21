const { getCoordinates } = require("./utils/getCoordinates");
const { getWeatherByCoordinates } = require("./utils/getWeatherByCoordinates");


const address = process.argv[2];
if (!address){
  console.log("No Address is provided");
  return;
}
getCoordinates(address, (error, {latitude, longitude, location} = {}) => {
  if (error) {
    console.log(`Error Retrieve Coordinates. ${error} `);
    return;
  }
  getWeatherByCoordinates(latitude, longitude, (error, {description, temperature, feelsLikeTemperature} = {}) => {
    if (error) {
      console.log(`Error Retrieve Weather: ${error}`);
      return;
    }
    console.log(`Weather for ${location} at latitude: ${latitude} and longitude: ${longitude}:`)
    console.log(`${description}.\r\nIt is currently ${temperature} degrees Fahrenheit and it feels like ${feelsLikeTemperature} degrees Fahrenheit `)
  })
})