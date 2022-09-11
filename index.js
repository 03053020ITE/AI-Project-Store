var request = require("request");
var cheerio = require("cheerio");


var cdc = function() {
    request({
      url: "https://www.worldometers.info/coronavirus/country/taiwan/",
      method: "GET"
    }, function(error, response, body) {
      if (error || !body) {
        return;
      }else{
  
      // 爬完網頁後要做的事情
      var $ = cheerio.load(body);
      
      var list = $(".maincounter-number");
      let count = $(list[0]).text();
      console.log(count);
      }
    });
  };

  cdc();