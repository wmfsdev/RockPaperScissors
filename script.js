
  const winners = []
  const roundCount = [];
  let gameWinner = "";


  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      roundCount.push(button.id);
      if (button.id) {
        playRound(button.id);
       
      };
    });
  });
  


  function playRound(playerChoice) {
    if (gameWinner == 5) {
      return;
    }
      const playerVal = convertPlayer(playerChoice);
      const randomNo = getRandomInt();
      const computerChoice = getComputerChoice(randomNo);
      const winner = checkWinner(playerVal, randomNo);
      winners.push(winner);
      logWin(playerChoice, computerChoice, winner);
      endGame();
      
    }
    
  
    function logWin(playerChoice, computerChoice, winner) {
      const player = winners.filter(winner => winner === "PLAYER WINS").length;
      const computer = winners.filter(winner => winner === "COMPUTER WINS").length;
      const draw = winners.filter(winner => winner === "DRAW").length;

      document.querySelector(".rounds").textContent = 
          `ROUND  ${roundCount.length + 1}`

      document.querySelector(".player-choice").textContent = 
          `PLAYER CHOSE:  ${playerChoice.toUpperCase()}`;

          document.querySelector(".comp-choice").textContent = 
          `COMPUTER CHOSE:  ${computerChoice.toUpperCase()}`

      document.querySelector(".results").textContent = 
          `SCORE: PLAYER:  ${player} COMPUTER: ${computer} DRAW: ${draw}`

          if (winner === "PLAYER WINS") {
      document.querySelector(".round-winner").textContent = 
          `${winner} ROUND`
        } else if (winner === "COMPUTER WINS") {
          document.querySelector(".round-winner").textContent = 
              `${winner} ROUND`
        } else { 
          document.querySelector(".round-winner").textContent = 
              `DRAW`
        } 
    }
    
    function endGame() {

      const player = winners.filter(winner => winner === "PLAYER WINS").length;
      const computer = winners.filter(winner => winner === "COMPUTER WINS").length;
      
      if (player == 5) {
        document.querySelector(".winner").textContent = 
          `PLAYER WINS!`
          gameWinner = player;
        

      } else if (computer == 5) {
        document.querySelector(".winner").textContent = 
          `COMPUTER WINS!`
          gameWinner = computer;
      }   
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
  
