const request = require('request');
const coordinatesUrl = "http://api.positionstack.com/v1/forward?access_key=069ca597c39147700a3e86b93d3452ec";

const getCoordinates = (address, callback) => {
  request({
    url: `${coordinatesUrl}&query=${encodeURIComponent(address)}`,
    json: true
  }, (e, {body}) => {
    if (e) {
      callback("Error communication with API", undefined);
      return;
    }
    if (!body.data || body.data.length===0) {
      callback("Error finding the location", undefined);
      return;
    }
    const {latitude, longitude, label: location } =body.data[0]
    callback(undefined, {
      latitude,
      longitude,
      location,
    });
  });
};
exports.getCoordinates = getCoordinates;
