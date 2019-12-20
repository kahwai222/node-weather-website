const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibGltazAwNzgiLCJhIjoiY2szdnFka3N3MHFzZjNrcHc1Y2w1ZWdiNiJ9.RlQdsvecCipNz5a_YkfUhA&limit=1`;
  
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (!body.features.length) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      const [longitude, latitude] = body.features[0].center;
      callback(undefined, {
        latitude,
        longitude,
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
