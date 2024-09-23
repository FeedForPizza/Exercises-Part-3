let inputSentence = document.querySelector('input[name="sentenceInput"]');
const buttonSplit = document.getElementById("buttonSplit");
const div = document.getElementById("splitSentence");
const span = document.getElementById("spanNumber");
let array = [];
let countWords = 0;
buttonSplit.addEventListener("click", function () {
    // Clear div
    div.innerHTML = "";
    // Clear number of words 
    countWords = 0;
    // Check if there is written sentence 
    if (inputSentence.value == null || inputSentence.value.length == 0) {
        alert("Please enter a sentence")
        return;
    }
    //Split the sentence 
    array = inputSentence.value.split(' ').sort();

    for (let i = 0; i < array.length; i++) {
        //Display the words 

        div.innerHTML += "<p>" + array[i] + "</p>";
        //Because of (' ') after spacebar still count a word even if there is no word 
        if (array[i].length != 0) {
            countWords++;
        }
    }
    //Clear input
    inputSentence.value = "";
    span.innerHTML = countWords;
})
