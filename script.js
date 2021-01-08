console.log("hooked up")

const instructions = document.querySelector(".instructions");
// winnerBlue.innerHTML = "Player 2 is the winner";
console.log(instructions.innerText);
const boxClick = document.querySelectorAll(".box");
boxClick.addEventListener("click", clicker);
function clicker(){
    console.log(boxClick)
}

