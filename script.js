console.log("hooked up")

const instructions = document.querySelector(".instructions");
// winnerBlue.innerHTML = "Player 2 is the winner";
console.log(instructions.innerText);

const boxClick = document.getElementsByClassName("box");

for (let i=0; i<boxClick.length; i++) {
   boxClick[i].addEventListener("click", clicker); 

}

function clicker(event){
    event.target.style.backgroundColor = "gray";
    event.target.removeEventListener("click", clicker);
    console.log(event.target.innerText)
}