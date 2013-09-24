// Generated by CoffeeScript 1.6.3
(function() {
  var barista, hasMilk, houseRoast, makeCoffee, order, request, response;

  houseRoast = null;

  hasMilk = function(style) {
    switch (style.toLowerCase()) {
      case "latte":
      case "cappucino":
        return true;
      default:
        return false;
    }
  };

  makeCoffee = function(requestedStyle) {
    var style;
    style = requestedStyle || 'Espresso';
    console.log(houseRoast);
    if (houseRoast != null) {
      return "" + houseRoast + " " + style;
    } else {
      return style;
    }
  };

  barista = function(style) {
    var coffee, time;
    time = (new Date()).getHours();
    if (hasMilk(style) && time > 12) {
      return "No!";
    } else {
      coffee = makeCoffee(style);
      return "Enjoy your " + coffee + "!";
    }
  };

  /*
  Browser Scripting
  */


  order = document.querySelector('#order');

  request = document.querySelector('#request');

  response = document.querySelector('#response');

  order.onsubmit = function() {
    alert(barista(request.value));
    response.innerHTML = barista(request.value);
    return false;
  };

}).call(this);
