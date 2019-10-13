'use strict';
import { getRates } from "./CurrencyExchangeCaller.js";

module.exports.endpoint = (event, context, callback) => {
  const rateData = getRates();
  const response = {
    statusCode: 200,
    body: JSON.stringify(rateData),
  };

  callback(null, response);
};
