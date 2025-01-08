var bills = [125, 555, 44];

var calcTip = (bill) => (bill >= 50 && bill <=300) ? bill * 0.15 : bill * 0.2;

var tips = bills.map(bill => calcTip(bill));

var total = (bill, tip) => bill + tip;

for (let [index, bill] of bills.entries()) {
    let tip = tips[index];  // Lấy tip từ mảng tips
    console.log(`Total bill ${bill}: ${total(bill, tip)}`);
}