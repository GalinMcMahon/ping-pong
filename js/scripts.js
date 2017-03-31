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
      if (numberOut % 3 === 0) {
        var numberOut = "ping"
      } else if (numberOut % 5 === 0) {
        var numberOut = "pong"
      } else{}
        console.log(numberOut);
    });
  });
});
