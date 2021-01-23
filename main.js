const Match = () => {
    let playerScore = 0,
        computerScore = 0;

    const computer = ["rock", "scissors", "paper"]
    const buttons = document.querySelectorAll(".button button")

    const computerHandImage = document.getElementById('computerHand');
    const playerHandImage = document.getElementById('playerHand');
    const match = document.getElementsByClassName('match')[0];

    let computerHand;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            computerChoice = Math.floor(Math.random() * 3);
            computerHand = computer[computerChoice]

            setTimeout(() => {
                //update image in hands class 
                playerHandImage.src = `./img/${button.textContent}.png`
                computerHandImage.src = `./img/${computerHand}.png`

                handsControl(button.textContent, computerHand)
                updateScore(playerScore, computerScore)

            }, 300);

        });
    });

    const handsControl = (playerHands, computerHands) => {
        if (playerHands != computerHands) {
            if (computerHand == "rock") {
                if (playerHands == "scissors")
                    computerScore++;
                else
                    playerScore++;
            }
            if (computerHand == "scissors") {
                if (playerHands == "paper")
                    computerScore++;
                else
                    playerScore++;
            }
            if (computerHand == "paper") {
                if (playerHands == "rock")
                    computerScore++;
                else
                    playerScore++;
            }
        }

    }
    const updateScore = (playerScore, computerScore) => {
        const player = document.getElementById("playerScore");
        const computer = document.getElementById("computerScore");
        //integer cast to string
        player.textContent = playerScore.toString();
        computer.textContent = computerScore.toString();

        if (playerScore == 3 || computerScore == 3) {
            match.classList.add("endGame")
            if (playerScore == 10)
                restartMatch(match, "Player");
            else
                restartMatch(match, "Computer");
            // playerScore = 0;
            // computerScore = 0;
        }
    }
}
const restartMatch = (match, winner) => {
    const restartMatch = document.getElementById('restart');
    const buttonRestart = document.getElementById("restart");
    const winnerText = document.getElementById("winner");
    //add restart box on window
    restartMatch.style.display = "flex"
    winnerText.textContent = winner.toUpperCase();

    buttonRestart.addEventListener("click", () => {
        restartMatch.style.display = "none"
        match.classList.remove("endGame") //remove opacity from match
        Match()
    })
}
Match();
/*TODO :
    - İsimler düzeltilecek
    - score tablosu oyun bittiğinde 0 olucak
    - berabere yazısı gelicek
 */