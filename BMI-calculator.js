// Calculate and compare BMI of Mark and John 

//basic solution

var massMark = 68;
var heightMark = 183;
var massJohn = 70;
var heightJohn = 160;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

var higherBmi = bmiMark > bmiJohn;
console.log("is Mark's BMI higher, than John's?"  + " " + higherBmi);


// if/else statement solution


var massMark = 68;
var heightMark = 183;
var massJohn = 70;
var heightJohn = 160;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

if (bmiMark > bmiJohn) {
  console.log("Mark's BMI is higher, than John's");
} else {
  console.log("Mark's BMI is lower, than John's");
}
