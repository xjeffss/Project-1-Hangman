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

const form = document.querySelector('form');
form.addEventListener("submit", function(evt){
    evt.preventDefault()
    let hangmanWord = document.getElementById("hangman-word");
    let splitWord = hangmanWord.value.split("");
    console.log(splitWord.length);
    console.log(splitWord[0]);
    const gridTotal = splitWord.length;
    hangmanWord.value = ""; // resets input box to entered word is not visible
         for (i=0; i<gridTotal; i++){
           addSquare(i);
       } 
    function addSquare(i){
        const wordSquare = document.createElement("div");
        wordSquare.setAttribute("class", "square");
        // wordSquare.setAttribute("innerText", `${splitWord[i]}`)
        wordSquare.innerText = splitWord[i];
        document.querySelector("body").appendChild(wordSquare);
        console.log(wordSquare)
 
        }
    })
       
       

      
