
//Make the computer produce a random choice between rock paper and scissors
// first we have to give the computer the values to choose from
// then we have to make the computer return those values
//then we have to make it so it is randomized

//the choices are placed in an array to be chosen from via the index
const rps = ["Rock", "Paper", "Scissors"]
//the random number function is created to assing a random index
// make the game function 

const humanVf = document.getElementById("human-vf")
const resultVf = document.getElementById("result")
const computerVf = document.getElementById("computer-vf")    
let humanHand = ""

const rockBtn = document.getElementById("rock-btn")
    rockBtn.addEventListener("click", () => {
        humanVf.textContent = "Rock"
        humanHand = "Rock"
        rockPaperScisors()
    })

const paperBtn = document.getElementById("paper-btn")
paperBtn.addEventListener("click", () => {
    humanVf.textContent = "Paper"
    humanHand = "Paper"
    rockPaperScisors()
})

const scissorsBtn = document.getElementById("scissors-btn")
scissorsBtn.addEventListener("click", () => {
    humanVf.textContent = "Scissors"
    humanHand = "Scissors"
    rockPaperScisors()
})


function rockPaperScisors(){
    let i = [Math.floor(Math.random() * rps.length)]
    let computerHand = rps[i]
        computerVf.textContent = `${computerHand}`
    if ( humanHand === computerHand){
        resultVf.textContent = "Draw!"
    } else if ( computerHand == "paper" && humanHand == "rock"){
        resultVf.textContent = "You Lose! Paper beats Rock"
    } else if (computerHand == "scissors" && humanHand == "paper"){
        resultVf.textContent = "You Lose! Scissors beats Paper"
    }else if (computerHand == "scissors" && humanHand == "rock"){
        resultVf.textContent = "You Lose! Rock beats Scissors"
    } else {
        resultVf.textContent = "You win!"
    }
}



console.clear()