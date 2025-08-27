const a = 5;
const b = 10;

function add() {
  const c = a+b;
  return console.log(c);
}

function print() {
  console.log(add());
}

print();


let randomNumber = Math.floor(Math.random()) + 1;
console.log(randomNumber);