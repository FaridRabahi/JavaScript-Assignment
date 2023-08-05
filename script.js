
      //function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
      function computerPlay() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
      }
  
      //function that plays a single round of Rock, Paper, Scissors
      function playRound(playerSelection, computerSelection, playerName) {
        
        playerSelection = playerSelection.toLowerCase();
  
        // Validate the player input
        if (!["rock", "paper", "scissors"].includes(playerSelection)) {
          return "Invalid input. Please choose 'Rock', 'Paper', or 'Scissors'.";
        }
  
        if (playerSelection === computerSelection) {
          return "It's a tie!";
        } else if (
          (playerSelection === "rock" && computerSelection === "scissors") ||
          (playerSelection === "paper" && computerSelection === "rock") ||
          (playerSelection === "scissors" && computerSelection === "paper")
        ) {
          return playerName +" Wins! " + playerSelection + " beats " + computerSelection ;
        } else {
          return "You lose! " + computerSelection + " beats " + playerSelection ;
        }
      }
  
      //function to play a 5 round game with the user
      function game() {
        alert("Welcome to the Rock, Paper, Scissors game!");

         // Ask the player for their name
        const playerName = prompt("Enter your name please:");
        alert(`Hello, ${playerName}! You will play against the computer. You have 5 attempts. Let's start the game.`);

        let playerScore = 0;
        let computerScore = 0;
  
        // Loop for 5 rounds
        for (let round = 1; round <= 5; round++) {
          alert(`Round : ${round}`);
          const playerSelection = prompt("Choose Rock, Paper, or Scissors:");
  
          // Computer turn to play
          const computerSelection = computerPlay();
  
          // call the function playRound to start the round
          const result = playRound(playerSelection, computerSelection,playerName);
          alert(result);
  
          // Update scores
          if (result.includes(playerName)) {
            playerScore++;
          } else if (result.includes("lose")) {
            computerScore++;
          }
        }
  
        // Determine the winner of the game
        let gameResult;
        if (playerScore === computerScore) {
          gameResult = "It's a tie! Both you and the computer scored " + playerScore + " points.";
        } else if (playerScore > computerScore) {
          gameResult = `Congratulations ${playerName}, you win the game! You scored ` + playerScore + " points, and the computer scored " + computerScore + " points.";
        } else {
          gameResult = "You lose the game! The computer scored " + computerScore + " points, and you scored " + playerScore + " points.";
        }
  
        alert(gameResult);
      }
  
      // Start the game
      game();