$(document).ready(function() {

  // Back-end logic:
  var numberOut = 1;
  var arrayIn = []
  var pingGo = (function() {
    arrayIn.length = 0;
    var userInput = parseInt($("input#numberInput").val());
    for (numberOut = 1; numberOut <= userInput; numberOut++) {
      var x;
      if (numberOut >0 && numberOut % 15 === 0) {
         x = "ping-pong";
      } else if (numberOut > 1 && numberOut % 5 === 0) {
         x  = "pong";
      } else if (numberOut >1 && numberOut % 3 === 0) {
         x = "ping";
      } else {
         x = numberOut;
      }
      arrayIn.push(x);
    }

    return arrayIn;
  });


// Front-end logic:
  $("form#userInput").submit(function(event) {
      $("#numberList").empty();
      $(".panel").show();
      $("#game").show();
      var output = pingGo();
      for (var i=0; i<output.length; i++)
         $("#numberList").append("<li>" + output[i] + "</li>")
      event.preventDefault();
  });
});
