// Business logic:

function firstAndLast(str) {

  let n = str.length; 
  let charFirst = str.charAt(0).toUpperCase(); 
  let charLast = str.charAt(n - 1).toUpperCase(); 

  return [charFirst, charLast]
} 

function reverse(array) {
  const reversed = array.reverse();

  return reversed
}

function numberThree(variable) {
  const input = $("input#sentence").val();
  const newSentence = input.concat(variable)

 return newSentence
}

function numberFour(str) {
  const n = str.length;
  const index = n/2;
  const indexTwo = Math.round(index);
  const output = str.charAt(indexTwo);

  return output
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
