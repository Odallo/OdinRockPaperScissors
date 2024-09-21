computerChoice(){
    let random = Math.floor(Math.random() * 3);
    if (random === 0){
        return "rock";
    }else if(random === 1){
        return "paper";
    }else{
        return "scissors";
    }
}

function humanChoice(){
    let input = window.prompt("What is your choice: ");
    return input.toLowerCase;
}

console.log (humanChoice());

const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return "It's a tie!";
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            return "You win this round!";
            } else {
                return "You lose this round!";
                }
}
const humanSelection = humanChoice();
const computerSelection = computerChoice();

function playGame(){
    for (let i = 0; i < 5; i++){
        let humanSelection = humanChoice();
        let computerSelection = computerChoice();

        let result = playRound(humanSelection, computerSelection);
        console.log(`Round ${i+1}: Human chose ${humanSelection}, Computer chose ${computerSelection}. ${result}`);
    }
}

playGame();

console.log(`Round ${i+1}: Human chose ${humanSelection}, Computer chose ${computerSelection}. ${result}`);