let timerDisplay = document.getElementById("time");
let inputMinutes = document.getElementById("minutes");
let button = document.querySelector("button");
let countText = document.getElementById("displayCount");
let countNumber = document.getElementById("counts");
let averageClickCount = document.getElementById("averageClicks");
let displayTimeOfClick = document.getElementById("dispTimeClicked");
let count = 0;
let startInterval;
let minute = 0;
let seconds = 0;
let startGame = false;
let convertTimeStamp;
countText.innerHTML = "Count: ";


//Start the game 
button.addEventListener("click", function () {
    initialClear();
    if (startGame) {

        clearInterval(startInterval);
        timerDisplay.innerHTML = "00:00";
        displayTimeOfClick.innerHTML = "";
        inputMinutes.disabled = false;
        window.onclick = null;
        count = 0;
        convertTimeStamp = new Date();
        startGame = false;
        inputMinutes.value = 0;
        return;
    }
    else {

        startGame = true;
        inputMinutes.disabled = true;
        minute = inputMinutes.value;
        if (minute > 0) {
            seconds = 59;
            minute--;
        }
        else if(minute == 0) {
            seconds = 59;
        }
        startInterval = setInterval(function () {
            if (seconds < 10) seconds = "0" + seconds;
            timerDisplay.innerHTML = minute + ":" + seconds;
            seconds--;
            //Listen for clicks when timer is counting
            clickCount(minute, seconds);
            if (seconds == 0) {
                if (minute == 0) {
                    startGame = false;
                    window.onclick = null;
                    displayScore();
                    return;
                }
                minute--;
                seconds = 59;
            }
        }, 1000);

    }
})
//Initial clear when starting 
function initialClear() {
    displayTimeOfClick.innerHTML = "";
    countText.innerHTML = "Count: ";
    countNumber.innerHTML = 0;
    averageClickCount.innerHTML = "";
    seconds = 0;
    if (seconds < 10) seconds = "0" + seconds;
    timerDisplay.innerHTML = minute + ":" + seconds;
}
//Count clicks 
function clickCount(minute, seconds) {
    window.onclick = function (e) {

count++;
        countNumber.innerHTML = count;
        displayTimeOfClick.innerHTML += "<p>" + minute + ":" + seconds + "</p>";
  
    }
}
//End of the Game
function displayScore() {
    //Stop listening for clicks 
    clearInterval(startInterval);
    timerDisplay.innerHTML = "00:00";
    countText.innerHTML = "Your score is: ";
    countNumber.innerHTML = count;
    averageClickCount.innerHTML = calculateAverageClicks(minute, count) + " click/second";
    inputMinutes.disabled = false;
}
//Calculate clicks per second 
function calculateAverageClicks(minute, count) {
    let calculateSeconds = (minute * 60) + 60;
    let average = count / calculateSeconds;
    return average;
}
