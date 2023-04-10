function getGrade(percentage) {

  // Your code here
  if(percentage >= 80){
      return console.log('A')
    } else if (percentage >= 70 && percentage <= 79){
      return console.log('B')
    } else if (percentage >= 60 && percentage <= 69){
      return console.log('C')
    } else if (percentage >= 50 && percentage <= 59){
      return console.log('D')
    } else if (percentage < 50){
      return console.log('F')

}

}
getGrade(75);
getGrade(80);
getGrade(45)


module.exports = getGrade;