const express = require("express");
const {YahooFinanceTicker} = require("yahoo-finance-ticker");

const app = express();

app.use(express.json());

const ticker = new YahooFinanceTicker();

ticker.subscribe(["QQQ"], (ticker) => {
    console.log(ticker);
  });

module.exports = app;






