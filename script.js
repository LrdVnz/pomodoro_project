
let myVar ;
function startTimer() {
 myVar = setInterval(myTimer, 1000);
}

let minutes = 25;
let seconds = 0;

let btn = document.querySelector("#start");

document.addEventListener("click", btn)

function myTimer() {
        if(seconds == 60){
     seconds-- ;
        }
        if(seconds > 0){
        document.getElementById("timer").innerHTML = minutes + " : " + seconds;
        seconds--;
        } else if(seconds == 0) {
            document.getElementById("timer").innerHTML = minutes + " : 00";
            minutes--;
            seconds = 60;
        }
    if(minutes == 0 && seconds == 0){
        minutes = 5 ;
    }
}

function pauseTimer(){
    clearInterval(myVar);
}

function resetTimer(){
    minutes = 25;
    seconds = 0;
    myVar = setInterval(myTimer, 1000);
}

