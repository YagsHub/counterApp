
let countElement = document.getElementById("count-el");
let previousElement = document.getElementById("previous");
let count = 0; 

function increment() {
    count += 1; 
    countElement.textContent = count;
}

function save(){
    let countStr = count + " - ";
    previousElement.textContent += countStr;
}
