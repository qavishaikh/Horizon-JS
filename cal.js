// Simple Calculator without loop, function, or input

let num1 = 10;        // First number
let num2 = 5;         // Second number
let operation = '+';  // Operation to perform

switch (operation) {
    case '+':
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case '-':
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case '*':
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case '/':
        if (num2 === 0) {
            console.log("Division by zero is not allowed.");
        } else {
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
        }
        break;
    case '%':
        console.log(`${num1} % ${num2} = ${num1 % num2}`);
        break;
    default:
        console.log("Invalid operation. Please choose +, -, *, /, or %.");
}
