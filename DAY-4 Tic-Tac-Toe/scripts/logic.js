window.addEventListener('load', bindEvents);
let buttons ;
function bindEvents(){
    buttons = document.getElementsByClassName('mybtn');

for(let i = 0 ;i<buttons.length; i++){
    buttons[i].addEventListener('click', printXOrZero);
}

document.getElementById('reset').removeEventListener('click',printXOrZero);
document.getElementById('reset').addEventListener('click',resetGame);
}

let flag = true;
let clickCount = 0;
let message = "";
let isGameFinish = false;
function printXOrZero(){
    const currentButton = this;
    if(!isGameFinish && currentButton.innerText.length ==0){
        clickCount++;
    currentButton.innerText = flag?"X":"0"; 
    if(clickCount>=5){
        if(isGameOver()){
            isGameFinish = true;
            message = "Game Over " + (flag?"X":"0") +" Win ";
            printMessage();
        }
        isDraw();
}
    flag = !flag; 
    }
}
const playAudio = ()=>document.getElementById('gameover').play();
const printMessage=()=>document.getElementById("msg").innerText = message;
const resetGame = ()=>{
    isGameFinish = false;
    flag = true;
    clickCount = 0;
    message = "";
    printMessage();
    for(let i = 0; i<buttons.length; i++){
        if(buttons[i].id==='reset'){
            continue;
        }
        buttons[i].innerText = '';
    }
}

function isGameOver(){
    return isThreeSame(buttons[0], buttons[1], buttons[2]) ||
    isThreeSame(buttons[0], buttons[3], buttons[6]) ||
    isThreeSame(buttons[0], buttons[4], buttons[8]) ||
    isThreeSame(buttons[2], buttons[4], buttons[6]) ||
    isThreeSame(buttons[2], buttons[5], buttons[8]) ||
    isThreeSame(buttons[1], buttons[4], buttons[7]) ||
    isThreeSame(buttons[3], buttons[4], buttons[5]) ||
    isThreeSame(buttons[6], buttons[7], buttons[8]);
}

function isThreeSame(one, two, three){
    if(isNotBlank(one) && isNotBlank(two) && isNotBlank(three)){
        if(one.innerText === two.innerText && one.innerText === three.innerText){
            return true;
        }
    }
    return false;
}

const isNotBlank =currentButton=>currentButton.innerText.length>0;

function isDraw(){
    if(clickCount==9){
        message = "Game Draw";
        
        printMessage();
    }
}