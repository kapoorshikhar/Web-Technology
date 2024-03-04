function calculateSquare(num1, num2) {
    const square1 = num1 * num1;
    const square2 = num2 * num2;
    
    return [square1, square2];
}

const number1 = 5;
const number2 = 8;

const [result1, result2] = calculateSquare(number1, number2);

console.log(`The square of ${number1} is ${result1}`);
console.log(`The square of ${number2} is ${result2}`);
const number3 = 10;
const number4 = 3;

const [result3, result4] = calculateSquare(number3, number4);

console.log(`The square of ${number3} is ${result3}`);
console.log(`The square of ${number4} is ${result4}`);