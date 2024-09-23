// JavaScript source code
const button = document.querySelector("button");


button.addEventListener("click", function () {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    let result = "";

    // Check what part of the day is 
    if (hours == 0 && minutes == 0) {
        result = "midnight";
    }
    else if (hours == 12 && minutes == 0) {
        result = "noon";
    }
    else if (hours >= 0 && hours < 12) {
        result = "morning";
    }
    else if (hours >= 12 && hours < 18) {
        result = "afternoon";
    }
    else if (hours >= 18 && hours <= 23) {
        result = "evening";
    }
    alert(`My favorite part of the day is ${result}.`);
});