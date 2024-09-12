// Create an object using object literal notation
const person = {
    // Properties
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    job: 'Developer',

    // Method to return the full name of the person
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    },

    // Method to increment the age
    incrementAge: function() {
        this.age += 1;
    },

    // Method to display person details
    displayInfo: function() {
        console.log(`Name: ${this.getFullName()}`);
        console.log(`Age: ${this.age}`);
        console.log(`Job: ${this.job}`);
    }
};

// Access and modify object properties
console.log('Before incrementing age:');
person.displayInfo(); // Display initial info

// Call method to increment age
person.incrementAge();

console.log('\nAfter incrementing age:');
person.displayInfo(); // Display updated info
