
function getBitCur() {
  $.get("https://api.coindesk.com/v1/bpi/currentprice.json", function(response) {
    console.log(JSON.parse(response).bpi.USD.rate);
    $(".bitcoin").html(JSON.parse(response).bpi.USD.rate + ' USD');
  });
};


let refreshCur = setInterval('getBitCur()', 2000);