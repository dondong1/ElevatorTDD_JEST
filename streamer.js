const axios = require("axios");
var options = {
  method: 'GET',
  url: 'https://yahoo-finance-low-latency.p.rapidapi.com/v8/finance/chart/AAPL',
  params: {comparisons: 'MSFT,^VIX', events: 'div,split'},
  headers: {
    'x-rapidapi-key': '864b9d8b06mshcbc11ef7643fe25p1eacbejsnf31f86dfeb09',
    'x-rapidapi-host': 'yahoo-finance-low-latency.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
module.exports = options;
