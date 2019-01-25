// business logic

var arrayThousands = ["M", "MM", "MMM"];
var arrayHundreds = ["C", "CC", "CCC", "CD,", "D", "DC", "DCC", "DCCC", "CM"];
var arrayTens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var arrayOnes = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

var totalRomanArray = [arrayThousands, arrayHundreds, arrayTens, arrayOnes];

// function convertConfimed(confirmCheck)
// {
//   if (confirmCheck == true) {
//
//   }
//   else {
//     alert("Something went wrong.  Check your input.")
//   }
// }

function convertToRomanNum(input) {
  var inputVal = input;
  console.log(inputVal);
  var inputSplit = inputVal.split("");
  var digitCount = inputSplit.length;
  var offset = 4 - digitCount;
  var outputA = [];
  var targetNum = 0;
  console.log(outputA.length);
  for (var i = 0; i < digitCount; i++) {
    targetNum = inputSplit[i];
    var targetArray = totalRomanArray[i+offset];
    if (targetNum != 0) {
      outputA.push(targetArray[targetNum-1]);
      console.log(outputA);
    }
  }
  var outputB = outputA.join('');
  $("#num-out-print").text(outputB);
  $("#num-in-print").text(inputVal);
}


// user interface logic
$(document).ready(function() {
  $("form#number-input").submit(function(event) {
    event.preventDefault();
    var inputNum = $("input#number-in").val();
    convertToRomanNum(inputNum);
    console.log(inputNum);
  });
});
