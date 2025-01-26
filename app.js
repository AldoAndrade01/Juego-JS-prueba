const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 0;
const WIN = 1;
const LOSE = 2;

//Extraer las variables del HTML
const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorsbtn = document.getElementById('scissors');
const resultText = document.getElementById('start-text');

const userImg = document.getElementById('userimg');
const machineImg = document.getElementById('machineimg');

//Agregar eventos a los botones
rockbtn.addEventListener("click", () => {
    play(ROCK);
});

paperbtn.addEventListener("click", () => {
    play(PAPER);
});

scissorsbtn.addEventListener("click", () => {
    play(SCISSORS);
});

//Función para jugar cuando se presiona un botón
function play(userOption){
    userImg.src = "img/" + userOption + ".svg";
    resultText.innerHTML = "Waiting for the machine..."; //Texto de espera

    //Animación de la máquina
    const interval = setInterval(function(){
        const machineOption = calMachineOption();
        machineImg.src = "img/" + machineOption + ".svg";
    }, 200);

    setTimeout(() => {

        clearInterval(interval);
        const machineOption = calMachineOption();
        const result = calculateResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".svg";

        switch(result){
            case TIE:
                resultText.innerHTML = "It's a tie!";
                break;
            case WIN:
                resultText.innerHTML = "You win!";
                break;
            case LOSE:
                resultText.innerHTML = "You lose!";
                break;
        }
    }, 2000);

}
 
//Función para calcular el resultado
function calculateResult(userOption, machineOption){
    if(userOption === machineOption){
        return TIE;
    } else if(userOption === ROCK && machineOption === SCISSORS){
        return WIN;
    } else if(userOption === PAPER && machineOption === ROCK){
        return WIN;
    } else if(userOption === SCISSORS && machineOption === PAPER){
        return WIN;
    } else {
        return LOSE;
    }
}

//Función para calcular la opción de la máquina, pasando las variables a constantes
function calMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch(number){
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}
