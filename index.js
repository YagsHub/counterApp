// document.getElementById("count-el").innerText = 5;

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let countElement = document.getElementById("count-el");
let previousElement = document.getElementById("previous");
let count = 0; 

function increment() {
    count += 1; 
    countElement.innerText = count;
}
// 1. Create a function, save(), which logs out the count when it's called
function save(){
    let countStr = count + " - ";
    previousElement.innerText += countStr;
}