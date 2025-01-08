var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var CalculateBMI = (mass, height) => 
    mass / (height * height);

var markHigherBMI = true;
if(CalculateBMI(massMark, heightMark) < CalculateBMI(massJohn, heightJohn))
    markHigherBMI = false

if(markHigherBMI)
    console.log(`Mark's BMI ${CalculateBMI(massMark, heightMark).toFixed(2)} is higher than John's ${CalculateBMI(massJohn, heightJohn).toFixed(2)}!`);
else console.log(`John's ${CalculateBMI(massJohn, heightJohn).toFixed(2)} is higher than Mark's BMI ${CalculateBMI(massMark, heightMark).toFixed(2)}!`)