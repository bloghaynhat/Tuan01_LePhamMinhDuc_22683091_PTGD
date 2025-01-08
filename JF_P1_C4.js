var bills = [275, 40, 430];

var CalcuTip = (bill) => (bill >= 50 && bill <=300) ? bill * 0.15 : bill * 0.2;

var Total = (bill) => bill + CalcuTip(bill);

for(let bill of bills){
    console.log(`Total bill ${bill}: ${Total(bill)}`);
}

