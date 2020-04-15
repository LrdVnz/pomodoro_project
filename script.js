
let myVar ;

function startTimer() {
 myVar = setInterval(myTimer, 1000);
}

let minutes = 25;
let seconds = 0;
let sessions = 3;
let breakTime; 
let startAudio = new Audio('sharp.mp3');
let endAudio = new Audio('accomplished.mp3');

let btn = document.querySelector("#start");

btn.addEventListener("click", function(){
    startTimer();
    startAudio.play();
})

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
    if(!sessions){
        if(minutes == 0 && seconds == 0){
           sessions = 4;
           breakTime = 15;
           minutes = breakTime;
           let audio = new Audio('accomplished.mp3');
           endAudio.play();
          }
        }
        else if(minutes == 0 && seconds == 0){
        let audio = new Audio('accomplished.mp3');
        endAudio.play();
        sessions--;  
        breakTime = 5 ;
        minutes = breakTime;
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

let firstSlider = document.getElementById("firstRange");
let firstOutput = document.getElementById("timerRange");
let timer = document.getElementById("timer")
timer.innerHTML = "25 : 00"
firstOutput.innerHTML = firstSlider.value + " minutes";

firstSlider.oninput = function(){
    firstOutput.innerHTML = this.value + " minutes";
    timer.innerHTML = this.value + " : 00";
    minutes = this.value;
}



let secondSlider = document.getElementById("secondRange");
let secondOutput = document.getElementById("breakRange");
let breakTimer = document.getElementById("breakTimer")
timer.innerHTML = "25 : 00"
secondOutput.innerHTML = secondSlider.value + " minutes";

secondSlider.oninput = function(){
    secondOutput.innerHTML = this.value + " minutes";
    breakTime = this.value;
}