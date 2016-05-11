$(document).ready(function() {

    var score = 0;
    $("#score").html(score);

  $(document).on("click", "#increase-5", function () {
    //Step 1: Add 5 to score variable
    //Step 2: Represent the new score on the UI
    score=score+5;
    $("#score").html(score + " Points");
  });

  $(document).on("click", "#decrease-5", function () {
    if (score-5>=0) {
      score=score-5;
      // Score +- 5;
    }
    $("#score").html(score + " Points");
  });

  $(document).on("click", "#submit-custom-score", function () {
    score=parseInt($("#custom-score").val());
    $("#score").html(score + " Points");
  });

});
