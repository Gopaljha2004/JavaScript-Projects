let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#computer-score")

const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"]
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw , Play again.";
    msg.style.backgroundColor = "blue";

};

const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }

    else {
        CompScore++;
        compScorePara.innerText = CompScore;
        console.log("You Lose.");
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};

const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame()
    }
    else {
        let userWin = true;
        if (userChoice === "stone") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else if (userChoice === "scissors") {
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner( userWin , userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    });

});