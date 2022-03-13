// ACTIVITY 1 - helloCN()

const helloCN = () => {
    console.log("Hello Code Nation");
}

helloCN()

const loop5 = () =>{
    for (i = 0; i < 5; i++){
        helloCN();
    }
}

loop5(helloCN)

// ACTIVITY 2 .map method as Higher Order function
let numbers = [1, 2, 3, 4, 5];

let multiply3 = numbers.map((x) => {
    return console.log (x * 3);
})

multiply3

// ACTIVITY 3

const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
    return a - b;
}
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
    return a/b;
}
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
}
 console.log (doMaths(7)(7, multiply));
