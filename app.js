let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const getCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawgame = () => {
  msg.innerText = "Game was Draw. Play Again";
  msg.style.backgroundColor = "Black";
};

const ShowWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Loose  ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "Red";
  }
};

const playgame = (userChoice) => {
  //Generate comp choice.
  const compChoice = getCompChoice();

  if (userChoice === compChoice) {
    drawgame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // paper, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    ShowWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
