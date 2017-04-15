var person = {
    firstName: 'Mehdi',
    lastName: 'Rahimi',
    fullName: function() { 'use strict';
		return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());

var calculator = {
    operator1: (-1),
    operator2: (-1),
    add: function(operator1, operator2) {
        return this.operator01 + this.operator02;
    },
   subtract: function() {
        return this.operator01 - this.operator02;
    }
}

calculator.operator01 = person.firstName.length;
calculator.operator02 = person.lastName.length;

console.log("operator1's length is: ", calculator.operator01);
console.log("operator2's length is: ", calculator.operator02);

calculator.multiply = function() {
    return calculator.operator01 * calculator.operator02;
};

console.log('Add: ', calculator.add());
console.log('Subtract: ', calculator.subtract());
console.log('Multiply: ', calculator.multiply());