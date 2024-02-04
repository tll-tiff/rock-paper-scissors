
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
        console.log (`${computerSelection} VS. ${playerSelection}....`+ "It's a tie!");
        return 0;
    }else if(computerSelection == 'ROCK' && playerSelection == 'PAPER'){
        console.log ("PAPER beats ROCK.... You win!");
        return 1;
    }else if(computerSelection == 'PAPER' && playerSelection  == 'ROCK'){
        console.log ("PAPER beats ROCK.... Computer wins!");
        return 2;
    }else if(computerSelection == 'SCISSORS' && playerSelection  == 'PAPER'){
        console.log ("SCISSORS beats PAPER.... Computer wins!");
        return 2;
    }else if(computerSelection == 'PAPER' && playerSelection  == 'SCISSORS'){
        console.log ("SCISSORS beats PAPER.... You win!");
        return 1;
    }else if(computerSelection == 'SCISSORS' && playerSelection  == 'ROCK'){
        console.log ("ROCK beats SCISSORS.... You win!");
        return 1;
    }else if(computerSelection == 'ROCK' && playerSelection  == 'SCISSORS'){
        console.log ("ROCK beats SCISSORS.... Computer wins!");
        return 2;
}

}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 1; i < 6; i++){
        console.log(`ROUND ${i}\n`);
        let result = playRound(prompt("Enter your choice: "), getComputerChoice());
        if (result == 1){
            playerScore++;
        }else if(result == 2){
            computerScore++;
        }
    }

    if(playerScore > computerScore){
        return ('Player wins!');
    }else{
        return ('Computer wins!');    }
}

console.log(playGame());