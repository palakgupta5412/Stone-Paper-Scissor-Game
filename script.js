let reset = document.querySelector(".reset");

let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");

let divImg = document.querySelector(".hidden");

let msg = document.querySelector(".msg");

const choices = document.querySelectorAll(".choice");

//Scores declared to change and manipulate here internally 
let user=0;
let comp=0;


//reset fn :
const resetFn = () => {
    user = 0 ;
    comp = 0 ;
    msg.innerText="";
    userScore.innerText="0";
    compScore.innerText="0";
    divImg.setAttribute("src","./Images/plane.png");
}
reset.addEventListener("click" , resetFn);
 
// To  get which choice was clicked by user :
// adding an evenlistener for each choice by iterating choices array 
choices.forEach((choice) =>{
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        //after getting the user choice we will play the game and call the ffn to generate the computers choice 
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    const compChoice = generateCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    if(userChoice==="stone" && compChoice==="paper"){
        upgradeCompScore();
    }
    if(userChoice==="scissor" && compChoice==="paper"){
        upgradeUserScore();
    }
    if(userChoice==="stone" && compChoice==="scissor"){
        upgradeUserScore();
    }
    if(userChoice==="paper" && compChoice==="scissor"){
        upgradeCompScore();
    }
    if(userChoice==="paper" && compChoice==="stone"){
        upgradeUserScore();
    }
    if(userChoice==="scissor" && compChoice==="stone"){
        upgradeCompScore();
    }
}

const upgradeCompScore=()=>{
    comp++;
    compScore.innerText=comp;
    msg.innerText = "Computer won !";

}
const upgradeUserScore=()=>{
    user++;
    userScore.innerText=user;    
    msg.innerText = "You won !";
}

const generateCompChoice=()=>{
    const arr=["stone","paper","scissor"];
    const randomNo = Math.floor(Math.random()*3);  //since random generate random between 0 to 1 
    console.log(randomNo);
    const choiceGenerated = arr[randomNo];

    if(choiceGenerated=="stone"){
        divImg.setAttribute("src","./Images/stone.png");
    }
    if(choiceGenerated=="paper"){
        divImg.setAttribute("src","./Images/paper.png");
    }
    if(choiceGenerated=="scissor"){
        divImg.setAttribute("src","./Images/scissor.png");
    }
    return choiceGenerated;
};

const drawGame=()=>{
    msg.innerText = "Draw!";
}





