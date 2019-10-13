const {getRates} = require('./CurrencyExchangeCaller');

async function waitForRates(){
    return await getRates();
}

const rate = waitForRates();
console.log("Rec: ", rate);