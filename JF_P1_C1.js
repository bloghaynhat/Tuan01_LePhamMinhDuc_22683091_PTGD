var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var CalculateBMI = (mass, height) => 
    mass / (height * height);

var markHigherBMI = true;

console.log("BMI Mark: ", CalculateBMI(massMark, heightMark));
console.log("BMI John: ", CalculateBMI(massJohn, heightJohn));

if(CalculateBMI(massMark, heightMark) < CalculateBMI(massJohn, heightJohn))
    markHigherBMI = false

if(markHigherBMI)
    console.log("Mark higher BMI");
else console.log("Mark doesn't higher BMI")