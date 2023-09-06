// Object Litreal
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}

// Object Constructor

let person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 40;

console.log(person.firstName);
console.log(person2['lastName']);

console.log(person.age);
person.age = 50;
console.log(person.age);

person.email = "johndoe@gmail.com";

delete person.email;

let person3 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
}

console.log(person3.fullName());