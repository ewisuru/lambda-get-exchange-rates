const axios = require('axios');

function getRates() {
    
axios.get("https://currencyapi.net/api/v1/rates?key=07d10146c5919f418e72f0418e57dc8e0d4d3&base=USD")
.then(function(response) {
    var timestamp = response.data.timestamp;

    var sgd = response.data.rates.SGD;
    var lkr = response.data.rates.LKR;
    var rate = lkr/sgd;

    var gmtTime = new Date( timestamp * 1000).toGMTString();

    var returnValue = {
        "LKR/SGD": rate,
        "time": timestamp
    };

    //console.log(returnValue);
    return returnValue;
})
.catch(function(response) {
    //console.log("Error: ", response)
    return response;
});

};

module.exports.getRates = getRates;
//getRates();