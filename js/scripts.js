$(document).ready(function() {

  // Back-end logic:
  var numberOut = 1;
  var arrayIn = []
  var pingGo = (function() {
    arrayIn.length = 0;
    var userInput = parseInt($("input#numberInput").val());
    for (numberOut = 1; numberOut <= userInput; numberOut++) {
      arrayIn.push(numberOut);
    }
  });
            // Function needs to be not nested
  var runArray = (function() {
    arrayIn.forEach(function(numberOut) {
      if (numberOut >0 && numberOut % 15 === 0) {
        var numberOut = "ping-pong"
      } else if (numberOut > 1 && numberOut % 5 === 0) {
        var numberOut = "pong"
      } else if (numberOut >1 && numberOut % 3 === 0) {
        var numberOut = "ping"
      } else {}
            // Line below needs to be moved to the front end
      $("#numberList").append("<li>" + numberOut + "</li>")
    });
  });

// Front-end logic:
  $("form#userInput").submit(function(event) {
      pingGo();
      $("#numberList").empty();
      $(".panel").show();
      $("#game").show();
      runArray(numberOut)
      event.preventDefault();
  });
});
