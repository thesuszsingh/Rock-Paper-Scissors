let userScore = 0;
let ComputerScore = 0;
let msg = document.querySelector("#msg");
let uscore = document.querySelector("#user");
let cscore = document.querySelector("#computer");
const choices = document.querySelectorAll(".choice");

computer = NaN;
user = NaN;
if(isNaN(computer)){
  computer = 0;
};
if(isNaN(user)){
  user = 0;
};



const drawGame = () => {
  msg.innerText = "game draw";
  msg.style.backgroundColor = "grey";
};
const showWinner = (userWin,compChoice,userChoice) => {
  if (userWin) {
    user++;
    uscore.innerText = user;
    msg.innerText = `your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "rgba(0, 255, 0, 1)";
  } else {
    computer++;
    cscore.innerText = computer;
    msg.innerText = `${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const gencomputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playGame = (userChoice) => {
  const compChoice = gencomputerChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else if(userChoice === "scissors"){
      userWin = compChoice === "rock" ? false : true;
    };
    showWinner(userWin,compChoice,userChoice);
  };
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
