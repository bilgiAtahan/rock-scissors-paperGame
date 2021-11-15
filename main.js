const Main = () => {
    const match = document.getElementsByClassName('match')[0];
    let playerScore = 0;
    let computerScore = 0;

    //start screen
    const startGame = () => {
        const playBtn = document.querySelector(".start-match button");
        const startScreen = document.querySelector(".start-match");

        playBtn.addEventListener("click", () => {
            startScreen.classList.add("endGame");
            match.classList.remove("endGame");
            Match();
        });
    }

    //play game
    const Match = () => {
        playerScore = 0;
        computerScore = 0;
        updateScore()
        const computer = ["rock", "scissors", "paper"]
        const buttons = document.querySelectorAll(".button button")
        const computerHand = document.getElementById('computerHand');
        const playerHand = document.getElementById('playerHand');
        let computerChoice = Math.floor(Math.random() * 3);
        let computerHandImage

        buttons[0].onclick = function () {
            playerHand.style.animation = "shakePlayer .5s ease "
            computerHand.style.animation = "shakeComputer .5s ease "
            computerChoice = Math.floor(Math.random() * 3);
            computerHandImage = computer[computerChoice]
            setTimeout(() => {
                //update image in hands class 
                playerHand.src = `./img/${buttons[0].textContent}.png`
                computerHand.src = `./img/${computerHandImage}.png`

                handsControl(buttons[0].textContent, computerHandImage)
            }, 300);
        }
        
        buttons[1].onclick = function () {
            playerHand.style.animation = "shakePlayer .5s ease "
            computerHand.style.animation = "shakeComputer .5s ease "
            computerChoice = Math.floor(Math.random() * 3);
            computerHandImage = computer[computerChoice]
            setTimeout(() => {
                //update image in hands class 
               playerHand.src = `./img/${buttons[1].textContent}.png`
               computerHand.src = `./img/${computerHandImage}.png`

                handsControl(buttons[1].textContent, computerHandImage)
            }, 300);
        }
        buttons[2].onclick = function () {
            playerHand.style.animation = "shakePlayer .5s ease "
            computerHand.style.animation = "shakeComputer .5s ease "
            computerChoice = Math.floor(Math.random() * 3);
            computerHandImage = computer[computerChoice]
            
            setTimeout(() => {
                //update image in hands class 
               playerHand.src = `./img/${buttons[2].textContent}.png`
               computerHand.src = `./img/${computerHandImage}.png`

                handsControl(buttons[2].textContent, computerHandImage)
            }, 300);
        }
    }
    //compare hands 
    const handsControl = (playerHands, computerHands) => {
        const tie = document.querySelector(".match .tie");
        document.getElementById('computerHand').style.removeProperty("animation")
        document.getElementById('playerHand').style.removeProperty("animation")
        if (playerHands !== computerHands) {
            tie.style.display = "none"
            if (playerHands === "rock") {
                if (computerHands === "paper") {
                    computerScore++;
                    updateScore()
                }
                else {
                    playerScore++;
                    updateScore()
                }
            }
            if (playerHands === "scissors") {
                if (computerHands === "rock") {
                    computerScore++;
                    updateScore()
                }
                else {
                    playerScore++;
                    updateScore()
                }
            }
            if (playerHands === "paper") {
                if (computerHands === "scissors") {
                    computerScore++
                    updateScore()
                }
                else {
                    playerScore++;
                    updateScore()
                }
            }
        }
        else {
            tie.style.display = "block"
        }
        
    }

    //Score table 
    const updateScore = () => {
        const player = document.getElementById("playerScore");
        const computer = document.getElementById("computerScore");
        //integer cast to string
        player.textContent = playerScore.toString();
        computer.textContent = computerScore.toString();

        if (playerScore === 3 || computerScore === 3) {
            match.classList.add("endGame")
            if (playerScore == 3) {
                restartMatch(match, "Player");
            }
            else {
                restartMatch(match, "Computer");
            }
        }
    }
    //End Game
    const restartMatch = (match, winner) => {
        const restartMatch = document.getElementsByClassName('restart-match')[0];
        const buttonRestart = document.getElementById("restart-button");
        const winnerText = document.getElementById("winner");
        //add restart box on window
        restartMatch.style.display = "flex"
        winnerText.textContent = winner.toUpperCase();

        buttonRestart.addEventListener("click", () => {
            restartMatch.style.display = "none"
            match.classList.remove("endGame") //remove opacity from match
            document.getElementById("playerHand").src="./img/rock.png"
            document.getElementById("computerHand").src="./img/rock.png"
            Match()
        })

    }
    startGame();
}
Main()
