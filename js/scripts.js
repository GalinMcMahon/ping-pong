$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    var userInput = $("input#numberInput").val();
      var numberOut = 0;
      var ArrayIn = []
      for (numberOut = 1; numberOut <= userInput; numberOut++) {
        ArrayIn.push(numberOut);
    }

      console.log(ArrayIn);


      event.preventDefault();
  });
});
