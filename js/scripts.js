$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    var userInput = $("input#numberInput").val();
      var numberOut = 0;
      for (numberOut = 1; numberOut <= userInput; numberOut++) {
      console.log(numberOut);

    }



      event.preventDefault();
  });
});
