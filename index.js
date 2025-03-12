let hScore = document.getElementById("score-h-el")
let gScore = document.getElementById("score-g-el")

let home = 0 
let guest = 0 

// home score buttons
function hAdd1() {
  home += 1
  hScore.textContent = home
}
function hAdd2() {
  home += 2
  hScore.textContent = home
}
function hAdd3() {
  home += 3
  hScore.textContent = home
}
// guest score buttons
function gAdd1() {
  guest += 1 
  gScore.textContent = guest
}
function gAdd2() {
  guest += 2 
  gScore.textContent = guest
}
function gAdd3() {
  guest += 3 
  gScore.textContent = guest
}
function newGame() {
  home = 0 
  guest = 0
  gScore.textContent = 0 
  hScore.textContent = 0 
}

// timer app with start stop and rest functions.
const display = document.getElementById("display");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function startT(){

  if(!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateT, 10);
    isRunning = true;
  }
}

function stopT(){
  if(isRunning){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function resetTime(){
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  // currentTime = 0;
  isRunning = false;
  display.textContent = "00:00:00";
}

function updateT(){

  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
  let seconds = Math.floor(elapsedTime / 1000 % 60);
  
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}`;

}


