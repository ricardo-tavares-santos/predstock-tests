const express = require('express')
const app = express()
const port = 3000

const yahooStockPrices = require('yahoo-stock-prices')
var analytics = require('forex.analytics');
const result = {} 

var is_weekend =  function(date){
    var dt = new Date(date);
    if(dt.getDay() == 6 || dt.getDay() == 0) { return true; } else { return false; } 
}

app.get('/:ticker', async(req, res) => {
    var dateObj = new Date();
	if (is_weekend(dateObj)) dateObj.setDate(dateObj.getDate() - 1); 
    if (is_weekend(dateObj)) dateObj.setDate(dateObj.getDate() - 1); 
    var endMonth = dateObj.getMonth(); 
    var endDay = dateObj.getDate();
    var endYear = dateObj.getFullYear();	
	
	var dateObjEnd = dateObj.setDate(dateObj.getDate() - 6); 	
    var startMonth = dateObj.getMonth(); 
    var startDay = dateObj.getDate();
    var startYear = dateObj.getFullYear();	
	
	/* getHistoricalPrices
	startMonth number (integer from 0 to 11)
	startDay number (integer from 0 to 31)
	startYear number (integer - 4 digit year)
	endMonth number (integer from 0 to 11)
	endDay number (integer from 0 to 31)
	endYear number (integer)
	ticker string (stock ticker symbol)
	frequency string (1 day = "1d", 1 week = "1wk", 1 month = "1mo")
	*/	
/*    result.prices = await yahooStockPrices.getHistoricalPrices(startMonth,
															   startDay,
															   startYear,
															   endMonth,
															   endDay,
															   endYear,
															   req.params.ticker, 
															   '1d');
*/

//     {
//         date: 1578407400,
//         open: 74.95999908447266,
//         high: 75.2249984741211,
//         low: 74.37000274658203,
//         close: 74.59750366210938,
//         volume: 108872000,
//         adjclose: 73.95879364013672
//     },
    /*
	{
	  open: 1.113990,
	  high: 1.113990,
	  low: 1.113890,
	  close: 1.113890,
	  time: 1435701600
	}
	
	
	
analytics.findStrategy(candlesticks, {
  populationCount: 100,
  generationCount: 300,
  selectionAmount: 10,
  leafValueMutationProbability: 0.5,
  leafSignMutationProbability: 0.3,
  logicalNodeMutationProbability: 0.3,
  leafIndicatorMutationProbability: 0.2,
  crossoverProbability: 0.03,
  indicators: indicators
 
}, function(strategy, fitness, generation) {
  console.log('Fitness: ' + fitness + '; Generation: ' + generation);
})
.then(function(strategy) {
  console.log('------------Strategy-------------')
  console.log(strategy);
});



var status = analytics.getMarketStatus(candlesticks, { strategy: strategy });
console.log(status);



var trades = analytics.getTrades(candlesticks, {
  strategy: strategy
});
console.log(trades);

*/



															   
	result.pattern = 1												   
  
    res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})