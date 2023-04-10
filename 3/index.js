function calculateTax(income) {


  // your code here
  if(income >= 500000){
    return `Output : ${income*0.15}`;
  } else if (income >= 300001 && income <= 500000) {
    return `Output : ${income*0.10}`;
  } else if (income >= 150001 && income <= 300000) {
    return `Output : ${income*0.05}`;
  } else {
    return `Output : 0`;
  }

}

console.log (calculateTax(150000));
console.log (calculateTax(220000));
console.log (calculateTax(700000));



module.exports = calculateTax;