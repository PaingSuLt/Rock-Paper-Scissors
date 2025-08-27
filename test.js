let num = 0;
let userInput = prompt(`give a number`);
while (num<=userInput) {
    num++;
    if (num%3==0 && num%5==0 ) {
        console.log(`${num} FizzBuzz`);
        continue;
    }
    if (num%3==0) {
        console.log(`${num} Fizz`);
        continue;
    }
    if (num%5==0) {
        console.log(`${num} Buzz`);
        continue;
    }
    console.log(`SuSu ayuu ma: ${num}`);
}