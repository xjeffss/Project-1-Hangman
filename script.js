const instructions = document.querySelector(".instructions");
// winnerBlue.innerHTML = "Player 2 is the winner";
console.log(instructions.innerText);

const boxClick = document.getElementsByClassName("box");

const form = document.querySelector('form');
form.addEventListener("submit", hangmanWordConvert);
function hangmanWordConvert(evt){
    evt.preventDefault()
    let bodyCounter = 0;
    let hangmanWord = document.getElementById("hangman-word");
    // const hangmanWordUC = hangmanWord.toUpperCase();
    let splitWord = hangmanWord.value.split("");
    // const splitWordUC = splitWord.upperCase();
    console.log(splitWord);
    const gridTotal = splitWord.length;
    hangmanWord.value = ""; // resets input box to entered word is not visible
    form.removeEventListener("submit", hangmanWordConvert);

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
    for (let i=0; i<boxClick.length; i++) {
        boxClick[i].addEventListener("click", clicker); 
    }
    function clicker(event){
        event.target.style.backgroundColor = "gray";
        event.target.removeEventListener("click", clicker);
        console.log(event.target.innerText)    
        bodyCounter++
    for (let i=0; i<splitWord.length; i++){
        if (
            event.target.innerText == splitWord[i]
        ){ 
            bodyCounter--
            console.log("yes")
        }
        else{
        
        } 
    }console.log(bodyCounter)
// need to fix second word entry without reset
// does not recognize upper vs lower case of the same
//body counter works but decrements twice for 2 of the same letters
    }
    
} 
       

      
