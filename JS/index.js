function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

function computerPlay() {
    let names = ['Rock', 'Paper', 'Scissors'];
    return names[getRandomInteger(0,3)];
}

function SingleRoundPlay(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if(playerSelection == 'ROCK') {
        switch(computerSelection){
            case 'Rock':
                return 'It is a tie!';
                break;
            case 'Scissors':
                return 'You win! Rock beats Scissors.';
                break;
            case 'Paper':
                return 'You lose! Paper beats Rock.';
                break;
        }
    }
    if(playerSelection == 'PAPER') {
        switch(computerSelection){
            case 'Rock':
                return 'You win! Paper beats Rock.';
                break;
            case 'Scissors':
                return 'You lose! Scissors beats Paper.';
                break;
            case 'Paper':
                return 'It is a tie!';
                break;
        }
    }
    if(playerSelection == 'SCISSORS') {
        switch(computerSelection){
            case 'Rock':
                return 'You lose! Rock beats Scissors.';
                break;
            case 'Scissors':
                return 'It is a tie!';
                break;
            case 'Paper':
                return 'You win! Scissors beats Paper.';
                break;
        }
    }
}

function game() {
    let i;
    let computerWins = 0, playerWins = 0, computerMove, playerMove, playResult;
    for (i=0; i<5; i++){
        playermove = prompt("Enter a move: ", "Rock/Paper/Scissors");
        computermove = computerPlay();
        playResult = SingleRoundPlay(playermove, computermove);
        console.log(playResult);
        if (playResult.search('You win!') == -1){
            if(playResult.search('You lose!') == -1){
            }
            else {
                computerWins++;
            }
        }
        else {
            playerWins++;
        }
    }
    if (computerWins > playerWins){
        console.log('You lost the game!');
    }
    else if (computerWins < playerWins){
        console.log('You won the game!');
    }
    else{
        console.log('It is a tie!');
    }
}

/*let testeplayer = 'Rock';
    let testecomputer = computerPlay();
    console.log('Player: ' + testeplayer);
    console.log('Computer: ' + testecomputer);
    console.log(SingleRoundPlay(testeplayer, testecomputer));*/
game();