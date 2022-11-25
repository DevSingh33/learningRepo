//notice 'this' behave diffirently 
//case 1 : without arrow function syntax
const person1 = {
    name: 'dev',
    age: 18,
    greet: function () {
        console.log("hello, I am : ", this.name);
    }
}
//case 2 : without arrow function syntax 2
const person2 = {
    name: 'dev',
    age: 18,
    greet() {
        console.log("hello, I am : ", this.name);
    }
}
//case 3 : with arrow function syntax (arrow refer to global scope)
const person3 = {
    name: 'dev',
    age: 18,
    greet: () =>
        console.log("hello, I am : ", this.name),  //name = undefined

}
//case 4 : with arrow function(without this.) syntax (arrow refer to global scope)
const person4 = {
    name: 'dev',
    age: 18,
    greet: function () {
        console.log("hello, I am : ", name)
    }//name = undefined

}

person1.greet();
person2.greet();
person3.greet();
person4.greet();

//! so 'this' when used with arrow syntax will refer to global scope, not the object in which it is used