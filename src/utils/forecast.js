const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/3d38d9d6386abe1bd2e2058fd50c1b68/' + latitude + ',' + longitude + '?units=si';

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service!');
        }
        else if(body.error) {
            callback('Unable to determine location');
        }
        else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature +' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    });
};

module.exports = forecast;