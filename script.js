const winners = []

game();

function game() {
    for (i = 1; i <= 5 ; i++) {
      playRound(i);
    }
    
  }

  // Plays an entire game consiting of five rounds. Individual rounds output their result
  // to the console only after the previous round is complete and displayed results.


function playRound(round) {
    
    const playerChoice = playerSelection();
    const playerVal = convertPlayer(playerChoice);
    const randomNo = getRandomInt();
    const computerChoice = getComputerChoice(randomNo);
    const winner = checkWinner(playerVal, randomNo);
    winners.push(winner);
    logWin(playerChoice, computerChoice, winner, round);
  }
  

  function logWin(playerChoice, computerChoice, winner, round) {
    const player = winners.filter(winner => winner === "PLAYER WINS").length;
    const computer = winners.filter(winner => winner === "COMPUTER WINS").length;
    const draw = winners.filter(winner => winner === "DRAW").length;
    console.log("Round: " +  round);
    console.log("Player Choice: " + playerChoice);
    console.log("Computer Choice: " + computerChoice);
    console.log(winner);
    console.log(`Player: ${player} Computer: ${computer} Draw: ${draw}`);
    console.log("==========================");
  }


  function playerWin(winner) {
    
      if (winner == "PLAYER WINS") {
    return 1;
      
      } else
      return 0;
    }

  function computerWin(winner) {
    
    if (winner == "COMPUTER WINS") {
    return 1;
    } 
    }
  
  function draw(winner) {

    if (winner == "DRAW") {
    return 1;  
    } 
    }


  // Outputs player and computer choice, as well as match result, to the console

  function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }
  
  // Generate random number betwen 0 and 2. Expected output: 0, 1, or 2.


  function getComputerChoice(randomNo) {
    switch (randomNo) {
      case 0:
      return "rock";
      
      case 1:
      return "paper";

      case 2:
      return "scissors";
    }
  }

  // Output Rock, Paper or Scissor depending on getRandomInt value


  function playerSelection() {
      let choice = prompt("rock, paper or scissors?...  check your spelling!", "rock");
        while (choice == "rock" ||
        choice == "paper" || 
        choice == "scissors") {
           return choice;
        }

          while (choice === null || choice === "") {
            choice = prompt("rock, paper or scissors?...  check your spelling!", "rock");
            if (choice == "rock" ||
                choice == "paper" || 
                choice == "scissors") {
                return choice;
            }
        }

          while (choice !== "rock" || choice !== "paper" || choice !== "scissors") {
            choice = prompt("rock, paper or scissors?...  check your spelling!", "rock");
            if (choice == "rock" ||
                choice == "paper" || 
                choice == "scissors") {
                return choice;
            }
        }
      }

  // prompt player for input. cancelling, providing no input and/or misspelling
  // rock/paper/scissors loops prompt window 
 

  function convertPlayer(playerChoice) {
    switch (playerChoice) {
      case "rock":
      return 0;

      case "paper":
      return 1;

      case "scissors":
      return 2;
     }  
  }

  // convert player choice to a corresponding number: 0, 1 or 2


  function checkWinner(playerVal, randomNo) {
      if (playerVal === 0 && randomNo === 2) {
        return "PLAYER WINS";
      } else if (playerVal ===  1 && randomNo === 0) {
        return "PLAYER WINS";
      } else if (playerVal === 2 && randomNo === 1) {
        return "PLAYER WINS";
      } else if (playerVal === randomNo) {
        return "DRAW";
      } else {
        return "COMPUTER WINS";
      }
  }

   // Compare player and computer choices, outputting win or draw accordingly




