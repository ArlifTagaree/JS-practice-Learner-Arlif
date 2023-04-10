function calculateTax(income) {


  // your code here
  if(income >= 500000){
    return console.log(`Output : ${income*0.15}`);
  } else if (income >= 300001 && income <= 500000) {
    return console.log(`Output : ${income*0.10}`);
  } else if (income >= 150001 && income <= 300000) {
    return console.log(`Output : ${income*0.05}`);
  } else {
    return console.log(`Output : 0`);
  }

}

calculateTax(150000);
calculateTax(220000);
calculateTax(700000);


module.exports = calculateTax;