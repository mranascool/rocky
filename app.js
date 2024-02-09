let userscore = 0;
let compscore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const option = ["rock","paper","scissors"];
  const randIdx =  Math.floor( Math.random()*3);
  return option[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw / Play again";
    msg.style.backgroundColor = "#0831b31";
};
const showWinner = (userWin,userchoice , compchoice) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you win! ${userchoice} beats ${compchoice}`; 
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `you lose. ${compchoice} beats ${userchoice}`; 
        msg.style.backgroundColor = "red";
    };
};

const playGame = (userchoice) => {
//generate computer choice -> moduler
const compchoice = gencompchoice();

if (userchoice === compchoice) {
    //draw Game
    drawGame();
}else{
    let userWin = true;
    if(userchoice === "rock"){
        //scissors, paper
       userWin = compchoice === "paper"  ? false: true;
    } else if (userchoice === "paper") {
        //rock, scissors
        userWin = compchoice === "scissors" ? false: true;

    }else{
        //rock,paper
       userWin = compchoice === "rock" ? false: true; 
    }
    showWinner(userWin, userchoice,compchoice);
 }
};

choice.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id")
        playGame(userchoice)
    });
});

let body = document.querySelector("body");
let mode = document.querySelector("#modebut");
let cores = document.querySelectorAll(".mood");
let color = "light";
let currmode = "light";

mode.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        cores.forEach(core => {
            core.style.color = "white";
        });
    } else {
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        cores.forEach(core => {
            core.style.color = "black";
        });
    }
    console.log(currmode);
});
