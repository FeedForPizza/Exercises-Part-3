// JavaScript source code
let redSquare = document.querySelector(".square");
let inputField = document.querySelector("#inputField");
let title = document.querySelector("h2");
let error = document.querySelector("h1");
let button = document.querySelector("button");
let p = document.querySelector("p");
let numberOfClicks = inputField.value;
let time;
let collectTime = [];

inputField.onclick = function () {
    error.style.display = "none";
}
redSquare.onclick = function (e) {
    console.log(inputField.value);
    if (inputField.value < 1 || inputField.value > 20 || inputField.value == "" || inputField.value == null) {
        error.style.display = "block";
        return;
    }
    else {
        error.style.display = "none";
        inputField.value--;
        time = new Date();
        time = getFormatedDate(time);
        collectTime.push(time);
        if (inputField.value == 0) {

            inputField.value = "";
            inputField.disabled = true;
            redSquare.style.backgroundColor = "red";
            redSquare.style.borderColor = "green";
            title.style.display = "block";
            setTimeout(function () {
                title.style.display = "none";
                for (i in collectTime) {
                    redSquare.innerHTML += "<p>" + collectTime[i] + "</p>";
                }
                button.style.display = "block";
            }, 5000);
        }
    }
}
button.addEventListener("click", function () {
    redSquare.innerHTML = "";
    inputField.disabled = false;
    redSquare.style.backgroundColor = "white";
    redSquare.style.borderColor = "red";
    button.style.display = "none";
})
function getFormatedDate(date) {

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}
function checkIfCorrect(value) {

}