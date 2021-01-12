let instructions = document.querySelector(".instructions");
console.log(instructions.innerText);

const boxClick = document.getElementsByClassName("box");
const noose = document.getElementById("noose");
const head = document.getElementById("head");
const body = document.getElementById("body");
const larm = document.getElementById("larm");
const rarm = document.getElementById("rarm");
const lleg = document.getElementById("lleg");
const rleg = document.getElementById("rleg");
const reye = document.getElementById("reye");
const leye = document.getElementById("leye");
const mouthOpen = document.getElementById("mouthOpen");
const wordBubble = document.getElementById("wordBubble");
noose.style.visibility = "hidden";
head.style.visibility = "hidden";
body.style.visibility = "hidden";
larm.style.visibility = "hidden";
rarm.style.visibility = "hidden";
lleg.style.visibility = "hidden";
rleg.style.visibility = "hidden";
reye.style.visibility = "hidden";
leye.style.visibility = "hidden";
mouthOpen.style.visibility = "hidden";
wordBubble.style.visibility = "hidden";


const randomWord = ["window", "scenario", "mobile", "fireplace", "morale", "source", "picture", "hardware", "cabinet", "courtesy"];

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
    evt.preventDefault();

    for (i=0; i<gridTotal; i++){
           addSquare(i);
       } 
    function addSquare(i){
        const wordSquare = document.createElement("div");
        const subWordSquare = document.createElement("span");
        subWordSquare.style.visibility = "hidden";
        wordSquare.setAttribute("class", "square");
        // wordSquare.setAttribute("innerText", `${splitWord[i]}`)
        subWordSquare.innerText = splitWord[i];
        wordSquare.appendChild(subWordSquare);

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
    if (bodyCounter<8){   
        bodyCounter++
        let foundALetter = false;
        const squares = document.querySelectorAll(".square")
    for (let i=0; i<splitWord.length; i++){
        if (
            event.target.innerText == splitWord[i].toUpperCase()
        ){ 
            foundALetter = true;
            squares[i].firstChild.style.visibility = "visible";
        }
        else {
        
        }           
        
    } if (foundALetter) {
        bodyCounter--
    }
    if (bodyCounter == 1){
        noose.style.visibility = "visible";
    }
    if (bodyCounter == 2){
        head.style.visibility = "visible";
    }
    if (bodyCounter == 3){
        body.style.visibility = "visible";
    }
    if (bodyCounter == 4){
        larm.style.visibility = "visible";
    }
    if (bodyCounter == 5){
        rarm.style.visibility = "visible";
    }
    if (bodyCounter == 6){
        lleg.style.visibility = "visible";
    }
    if (bodyCounter == 7){
        rleg.style.visibility = "visible";
    }
    if (bodyCounter == 8){
        reye.style.visibility = "visible";
        leye.style.visibility = "visible";
        mouthOpen.style.visibility = "visible";
        wordBubble.style.visibility = "visible";
    }
    }
    else {
        instructions.innerText = "YOU'RE DEAD";
    }
// need to fix second word entry without reset
// need to reveal puzzle
//need to kill bodyCounter on winner

    }

} 
       

      
