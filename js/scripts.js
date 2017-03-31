$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    var userInput = $("input#numberInput").val();
      var numberOut = 0;
      var ArrayIn = []
      for (numberOut = 1; numberOut <= userInput; numberOut++) {
        $("#outRange").show(numberOut);
        ArrayIn.push(numberOut);
      }
        console.log(ArrayIn);
        event.preventDefault();

    ArrayIn.forEach(function(numberOut) {
      if (numberOut % 15 === 0) {
        var numberOut = "ping-pong"
      } else if (numberOut % 5 === 0) {
        var numberOut = "pong"
      } else if (numberOut % 3 === 0) {
        var numberOut = "ping"
      } else {}
        console.log(numberOut);
    });
  });
});
