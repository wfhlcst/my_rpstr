
    let roundNumber = 1;
    let playerWins = 0, computerWins = 0, numberOfTies = 0;
    let computerChoice = "", playerChoice = "";
    let gameComplete = false;

    const roundNumberSpan = document.getElementById("round");

    const playerChoiceSpan = document.getElementById("playerChoice");
    const computerChoiceSpan = document.getElementById("computerChoice");

    const computerWinsSpan = document.getElementById("computerWins");
    const playerWinsSpan = document.getElementById("playerWins");
    const tiesSpan = document.getElementById("ties");
   
    const resultsAreaDiv = document.getElementById("resultsArea");

function computerPlay() {

    let min = 1,
        max = 3;

    let selectionNumber = Math.floor(Math.random() * (max - min) + min);

    switch (selectionNumber) {
        
        case 1: 
        {
            return "rock";
            break;
        }
        case 2:
        {
            return "paper";
            break;
        }
        case 3:
        {
            return "scissors";
            break;
        }
    };

}

function init()
{
     roundNumber = 1;
     playerWins = 0; computerWins = 0; numberOfTies = 0;
     playerChoiceSpan.textContent = "Player Choice: ";
     computerChoiceSpan.textContent = "Computer Choice:";
     computerChoice = ""; playerChoice = "";
     resultsAreaDiv.textContent = "NO RESULTS - GAME ONGOING";
     gameComplete = false;
}

function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection)
        return "tie";

    else if ( ( (playerSelection == "rock") && (computerSelection == "paper") )
             || ( (playerSelection == "paper") && (computerSelection == "scissors") )
             || ( (playerSelection == "scissors") && (computerSelection == "rock") ) )
                return "computer";
                
    else if ( ( (computerSelection == "rock") && (playerSelection == "paper") )
             || ( (computerSelection == "paper") && (playerSelection == "scissors") )
             || ( (playerSelection == "rock") && (computerSelection == "scissors") ) )
                return "player";
}

function DOMscoreUpdate()
{
    roundNumberSpan.textContent = "ROUND: " + roundNumber;
    
    playerChoiceSpan.textContent = "Player Choice: " + playerChoice;
    computerChoiceSpan.textContent = "Computer Choice: " + computerChoice;

    computerWinsSpan.textContent = "Computer Wins: " + computerWins;
    playerWinsSpan.textContent = "Player Wins: " + playerWins;
    tiesSpan.textContent = "Ties: " + numberOfTies;
}

function playerClick(playerButton)
{
    
    if( (roundNumber <= 5) & (gameComplete == false) )
    {
        console.log("Round: " + roundNumber);

        computerChoice = computerPlay();
        playerChoice = playerButton;
        let roundResult = playRound(playerButton, computerChoice);

        switch (roundResult)
        {
            case "tie":
                {
                    numberOfTies++;
                    console.log("It's a tie! \n")
                    break;
                }
            case "computer":
                {
                    computerWins++;
                    console.log("Computer wins! \n")
                    break;
                }
            case "player":
                {
                    playerWins++;
                    console.log("Player wins! \n")
                    break;
                }
        }

        if(roundNumber == 5)
        {
            DOMscoreUpdate();
            displayResults();
            gameComplete = true;
        }

        else
        {
            roundNumber++;
            DOMscoreUpdate();
        }

    }

}


function displayResults()
{
    resultsAreaDiv.textContent = "WINNER: "

    if(playerWins > computerWins) resultsAreaDiv.textContent += "Player!";
    else if(computerWins > playerWins) resultsAreaDiv.textContent += "Computer!";
    else resultsAreaDiv.textContent += "It's a Tie!";

    console.log("Computer Wins: " + computerWins);
    console.log("Player Wins: " + playerWins);
    console.log("Ties: " + numberOfTies);
}

function game() 
{
    init();
    DOMscoreUpdate();

 };

game();