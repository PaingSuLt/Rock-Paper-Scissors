let num = 0;
let count = 1;

for (let i = 0; i < 10; i++) {
    let userInput = parseInt(prompt(`enter 10 numbers`));
    
    if (userInput > num) {
        num = userInput;
    }

}
console.log(`Biggest : ${num}`)

