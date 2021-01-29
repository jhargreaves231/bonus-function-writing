// Business logic:

function firstAndLast(str) {

  let n = str.length; 
  charFirst = str.charAt(0).toUpperCase(); 
  charLast = str.charAt(n - 1).toUpperCase(); 

  return [charFirst, charLast]
} 

// UI logic:
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const input = $("input#sentence").val();
    $(".sentenceInput").text(firstAndLast(input));
    const firstFunctionResult = firstAndLast(input);
    //console.log(firstFunctionResult);
    $("#reveal").show();
  });
});
