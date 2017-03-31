$(document).ready(function() {

// Back-end logic:
  $("form#userInput").submit(function(event) {
    $("#numberList").empty()
    $(".panel").show();
    $("#game").show();
    var userInput = parseInt($("input#numberInput").val());
    var numberOut = 1;
    var ArrayIn = []
    for (numberOut = 1; numberOut <= userInput; numberOut++) {
      ArrayIn.push(numberOut);
    }

// Front-end logic:
    event.preventDefault();
    ArrayIn.forEach(function(numberOut) {
      if (numberOut >0 && numberOut % 15 === 0) {
        var numberOut = "ping-pong"
    } else if (numberOut > 1 && numberOut % 5 === 0) {
      var numberOut = "pong"
    } else if (numberOut >1 && numberOut % 3 === 0) {
      var numberOut = "ping"
    } else {}

      $("#numberList").append("<li>" + numberOut + "</li>");
    });
  });
});
