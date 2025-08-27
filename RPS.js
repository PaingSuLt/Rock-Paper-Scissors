

function getComputerChoice() {
    let choice = Math.random() * 3;
    
    

}

getComputerChoice;

let text;
let choice = Math.floor(Math.random() * 3);
if (choice==0) {
    text = `Rock`;
}
if (choice==1) {
    text = `Paper`;
}
if (choice==2) {
    text = `Scissor`;
}
console.log(`Computer: ${text}`);