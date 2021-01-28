// Business logic:

// UI logic:
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const input = $("input#sentence").val();
    $(".sentenceInput").text(input);
    $("#reveal").show();
  });
});