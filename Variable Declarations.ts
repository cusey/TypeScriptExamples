let a: number;
let b: boolean;
let c:string;
let d:any;
let e:number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];

enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3 };

let backgroundColor = Color.Red;

/*
const declarations
They are like let declarations but, as their name implies, their value cannot be changed once they are bound.
In other words, they have the same scoping rules as let, but you can’t re-assign to them.
*/

const g = 9;
g = 9

/*
Block-scoping
When a variable is declared using let, it uses what some call lexical-scoping or block-scoping. Unlike variables
declared with var whose scopes leak out to their containing function, block-scoped variables are not visible outside 
of their nearest containing block or for-loop.
*/

function h(input: boolean) {
    let i = 100;

    if (input) {
        // Still okay to reference 'i'
        let j = i + 1;
        return j;
    }

    // Error: 'j' doesn't exist here
    return j;
}
h(true); 
h(false); 

/*
var declarations
In this above example, 'o' captured the variable 'l' declared in 'k'. At any point that 'o' gets called, the value
of 'l' will be tied to the value of 'l' in 'k'. Even if 'o' is called once 'k' is done running, it will be able to 
access and modify 'l'.
*/

function k() {
    var l = 1;

    l = 2;
    var m = o();
    l = 3;

    return b;

    function o() {
        return l;
    }
}

k(); // returns '2'
