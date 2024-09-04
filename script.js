function computerChoice(){
    let random = Math.floor(Math.random() * 3);
    if (random === 0){
        return "rock";
    }else if(random > 0 < 1){
        return "paper";
    }else{
        return "scissors";
    }
}

function humanChoice(){
    let input = parseInt(window.prompt("What is your choice: "));
    return input;
}

console.log (humanChoice());
