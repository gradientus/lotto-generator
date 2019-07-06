//variables
var randomNumber = 0;
var powerBall = 0;

//event listeners
$(document).ready(function() {
  $("#random-button").on("click", function() {
    //FUNCTION TO LISTEn for the button click

    //loop to generate 5 numbers

    // randomNumber = Math.floor(Math.random() * 69) + 1;
    var lottoNumber = "";
    powerBall = Math.floor(Math.random() * 26) + 1;

    for (var i = 0; i < 5; i++) {
      randomNumber = Math.floor(Math.random() * 69) + 1;
      lottoNumber = randomNumber + " " + lottoNumber;
    }

    $("#random-number").prepend(
      "<br><hr>" + lottoNumber + "<span class='pb'>" + powerBall
    ) + "</span>";
    // $("#pb").
  });
});
