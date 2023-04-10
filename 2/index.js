function getGrade(percentage) {

  // Your code here
  if(percentage >= 80){
      return 'A'
    } else if (percentage >= 70 && percentage <= 79){
      return 'B'
    } else if (percentage >= 60 && percentage <= 69){
      return 'C'
    } else if (percentage >= 50 && percentage <= 59){
      return 'D'
    } else if (percentage < 50){
      return 'F'

}

}
console.log(getGrade(75)) ;
console.log(getGrade(80)) ;
console.log(getGrade(45)) ;



module.exports = getGrade;