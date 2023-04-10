function ageClassification(age) {

    // Your code here
    if(age <= 18){
        return 'Minor'
    } else if (age >18 && age < 65){
        return 'Adult'
    } else {
        return 'Senior'
    }

}

console.log(ageClassification(16)); 


module.exports = ageClassification