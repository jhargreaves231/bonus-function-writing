// Business logic:

function firstAndLast(str) {

  const n = str.length; 
  const charFirst = str.charAt(0).toUpperCase(); 
  const charLast = str.charAt(n - 1).toUpperCase(); 

  return [charFirst, charLast]
} 

function reverse(array) {
  const reversed = array.reverse();

  return reversed
}

function numberThree(variable) {
  const input = $("input#sentence").val();
  const newSentence = input.concat(' ', variable)

 return newSentence
}

function numberFour(str) {
  const n = str.length;
  const index = n/2;
  const indexTwo = Math.round(index);
  const output = str.charAt(indexTwo);
  const startSentence = output.concat(' ', str);

  return startSentence
}

// UI logic:
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const input = $("input#sentence").val();
    $(".sentenceInput").text(firstAndLast(input));

    const firstFunctionResult = firstAndLast(input);
    console.log(firstFunctionResult);

    $(".sentenceInputTwo").text(reverse(firstFunctionResult));

    //const secondFunctionResult = reverse(firstFunctionResult);
    const secondFunctionResult = firstFunctionResult.reverse();
    console.log(secondFunctionResult);
  
    $(".sentenceInputThree").text(numberThree(secondFunctionResult));

    const thirdFunctionResult = numberThree(secondFunctionResult);
    console.log(thirdFunctionResult);

    const fourthFunctionResult = numberFour(input);
    console.log(fourthFunctionResult);

    $(".sentenceInputFour").text(numberFour(input));


    $("#reveal").show();
  });
});
