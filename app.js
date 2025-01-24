const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorsbtn = document.getElementById('scissors');

rockbtn.addEventListener("click", () => {
    play("ROCK");
});

paperbtn.addEventListener("click", () => {
    play("PAPER");
});

scissorsbtn.addEventListener("click", () => {
    play("SCISSORS");
});

function play(userOption){
    const machineOption = Math.floor(Math.random() * 3);
    console.log(machineOption);
}