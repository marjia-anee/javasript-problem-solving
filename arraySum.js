/** var numbers = [45,68,78,23, 3,54,65];
var  sum = 0;

for (var i=0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum +element;
}

console.log ("total num: ",sum); */


var numbers = [45,68,78,23];

function getArraySum(numbers){


 var  sum = 0;

 for (var i=0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum +element;
 }
 return sum;
}
var result = getArraySum(numbers);
console.log ("total num: ",result);

