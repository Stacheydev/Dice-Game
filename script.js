"use strict";
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");
const turn = document.querySelector(".turn");
const counter = document.querySelector(".counter");
const rollBtn = document.querySelector(".roll");
const redeemBtn = document.querySelector(".redeem");
const endScreen = document.querySelector(".end-screen");
const winnerText = document.querySelector(".winner-text");
const body = document.querySelector("body");

let score1Value = 0;
let score2Value = 0;

let temp = 0;
let playerTurn = 1;
counter.innerText = temp;

let changeTurn = function(){
    temp = 0;
    counter.innerText = temp;
    playerTurn == 1 ? playerTurn = 2 : playerTurn = 1;
    turn.innerText = `Player ${playerTurn}'s turn`;
    playerTurn == 1 ? body.style.backgroundColor = "#F8333C" : body.style.backgroundColor = "#094D92";
}

function checkWinner(){
    if (score1Value >= 50 || score2Value >= 50) {
        const winningPlayer = score1Value >= 50 ? 1 : 2;
        console.log(`Player ${winningPlayer} wins`);
        endScreen.classList.remove("hidden");
        winnerText.innerText = `Player ${winningPlayer} Wins!`;
        rollBtn.disabled = true;
        redeemBtn.disabled = true;
    }
};
 
function roll(){
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    if(randomNumber != 1 && randomNumber != 6){
        temp += randomNumber;
        counter.innerText = temp;
    }else{
        changeTurn();
    }
}

function redeem(){
    if(temp != 0){
        playerTurn == 1 ? score1Value += temp : score2Value += temp;
        playerTurn == 1 ? score1.innerHTML = `<b>Player 1: ${score1Value}</b>`: score2.innerHTML = `<b>Player 2: ${score2Value}</b>`;
        changeTurn();
        checkWinner();
    }
}

rollBtn.addEventListener("click", roll);
redeemBtn.addEventListener("click", redeem);