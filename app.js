let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const showWinner = (userWin, userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () => {
    msg.innerText = `Game was Draw! Play Again Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#D0BCD5";
}

const genCompChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() *3);
    return options[randomIdx];
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);

    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "stone") {
            // paper or scissor
        userWin = compChoice === "paper" ? false : true;

        } else if(userChoice === "paper") {
            // stone or scissor
        userWin = compChoice === "stone" ? true : false;

        } else {
            // stone or paper
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
        }
    };



choices.forEach((choice) => {
choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
        });
});