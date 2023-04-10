function ageClassification(age) {

    // Your code here
    if(age <= 18){
        return console.log('Minor')
    } else if (age >18 && age < 65){
        return console.log('Adult')
    } else {
        return console.log('Senior')
    }

}

ageClassification(16)


module.exports = ageClassification