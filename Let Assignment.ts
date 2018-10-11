/*
Variables in JavaScript are function scoped.This is because { does not create a new variable scope. 
The variable x1 is the same inside the if block as it is outside the if block. This is a common source
of errors in JavaScript programming.
*/

var x1 = 123;
if (true) {
    var x1 = 456;
}
console.log('Using the var : ' + x1); // 456

/*
This is a common source of errors in JavaScript programming. This is why TypeScript (and ES6) introduces
 the let keyword to allow you to define variables with true block scope. That is if you use let instead 
 of var you get a true unique element disconnected from what you might have defined outside the scope. 
 The same example is demonstrated with let:
 */
 
let x2 = 123;
if (true) {
    let x2 = 456;
}
console.log(foo); // 123

/*
Another place where let would save you from errors is loops.
*/

var index = 0;
var array = [1, 2, 3];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}
console.log(index); // 0

