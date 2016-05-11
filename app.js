$(document).ready(function() {

    var score = 0;
    $("#score").html(score);

  $(document).on("click", "#increase-5", function () {
    score=score+5;
    $("#score").html(score);
  });

  $(document).on("click", "#decrease-5", function () {
    score=score-5;
    $("#score").html(score);
  });

  $(document).on("click", "#submit-custom-score", function () {
    score=parseInt($("#custom-score").val());
    $("#score").html(score);
  });

});
