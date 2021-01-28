// Business logic:

function firstAndLast(str) {

  let n = str.length; 
  charFirst = str.charAt(0); 
  charLast = str.charAt(n - 1); 
  console.log(charFirst)
  console.log(charLast)
} 


// UI logic:
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const input = $("input#sentence").val();
    $(".sentenceInput").text(firstAndLast(input));
    $("#reveal").show();
  });
});