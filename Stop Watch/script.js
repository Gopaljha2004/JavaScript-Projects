let hours = document.querySelector("#hours");
let mins = document.querySelector("#min");
let sec = document.querySelector("#sec");

// buttons 
// Taking acces from the buttons
let start = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let startTime;
let elapsedTime = 0;
let timeInterval;

function formatTime(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return {
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
    };
}

function updateDisplay() {
    const formattedTime = formatTime(elapsedTime);
    hours.textContent = formattedTime.hours;
    mins.textContent = formattedTime.minutes;
    sec.textContent = formattedTime.seconds;
}

// start Function 
function startTimer() {
    startTime = Date.now() - elapsedTime;
    timeInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 1000);
    start.disabled = true
}

//  stop function 

function stopTimer() {
    clearInterval(timeInterval);
    start.disabled = false;
}

// reset fucntion
function resetTimer() {
    clearInterval(timeInterval);
    start.disabled = false;
    elapsedTime = 0;
    updateDisplay();
}

start.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

// Adding an alert type leaving website
window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    event.returnValue = '';
    const message = 'Are you sure you want to leave?';
    event.returnValue = message;
    return message;
});

