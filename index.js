
/** ROCK, PAPER, SCISSORS ALGORITHM
 *  Randomly generate Rock, Paper, or Scissors
 *  Prompt user for input of either Rock, Paper, or Scissors
 *  Compare generated turn vs. input
 *      Rock > Scissors
 *      Scissors > Paper
 *      Paper > Rock
 *  Display result of play (which player won)
 */

// Function to randomly generate turn
function getComputerChoice(){
    let choices = ['ROCK','PAPER','SCISSORS'];
    return (choices[Math.floor(Math.random() * (2-0 + 1))]);
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();

    if(computerSelection === playerSelection){
        p.textContent =  (`${computerSelection} VS. ${playerSelection}....`+ "It's a tie!");
        return 0;
    }else if(computerSelection == 'ROCK' && playerSelection == 'PAPER'){
        p.textContent =  ("PAPER beats ROCK.... You win!");
        return 1;
    }else if(computerSelection == 'PAPER' && playerSelection  == 'ROCK'){
        p.textContent =  ("PAPER beats ROCK.... Computer wins!");
        return 2;
    }else if(computerSelection == 'SCISSORS' && playerSelection  == 'PAPER'){
        p.textContent =  ("SCISSORS beats PAPER.... Computer wins!");
        return 2;
    }else if(computerSelection == 'PAPER' && playerSelection  == 'SCISSORS'){
        p.textContent =  ("SCISSORS beats PAPER.... You win!");
        return 1;
    }else if(computerSelection == 'SCISSORS' && playerSelection  == 'ROCK'){
        p.textContent =  ("ROCK beats SCISSORS.... You win!");
        return 1;
    }else if(computerSelection == 'ROCK' && playerSelection  == 'SCISSORS'){
        p.textContent =  ("ROCK beats SCISSORS.... Computer wins!");
        return 2;
}

}
let p = document.getElementById("results-paragraph");
let buttons = document.querySelectorAll("button:not(#reset-btn)");
let playerScore = document.getElementById("player-score");
let compScore = document.getElementById("comp-score");

buttons.forEach(function(button){
    button.addEventListener("click", function() {
                let result = playRound(button.textContent, getComputerChoice());

                if(result == 1){
                    playerScore.textContent = (parseInt(playerScore.textContent) + 1).toString();
                }else if(result == 2){
                    compScore.textContent = (parseInt(compScore.textContent) + 1).toString();
                }

                if(playerScore.textContent == "5" || compScore.textContent == "5"){

                if(playerScore.textContent == "5"){
                    p.textContent = "5-" + compScore.textContent + ", you win!";
                }else if(compScore.textContent == "5"){
                    p.textContent = playerScore.textContent + "-5, computer wins!";
                }  

            }
    }
)});

let resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", () =>{
    playerScore.textContent = "0";
    compScore.textContent = "0";
    p.textContent = 'Game has reset.';
});