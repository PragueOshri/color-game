// const colors = [
//     "rgb(255, 0, 0)",
//     "rgb(74, 100, 175)",
//     "rgb(255, 100, 240)",
//     "rgb(200, 180, 5)",
//     "rgb(0, 200, 0)",
//     "rgb(10, 5, 211)",
// ];
let numSquaers = 6;
let colors = generateRandomColors(numSquaers); 
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
let massageDisplay = document.querySelector("#massage");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
// let easyBtn = document.querySelector("#easyBtn");
// let hardBtn = document.querySelector("#hardBtn");
let modeBtns = document.querySelectorAll(".mode");


for (let i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener("click", function(){
        modeBtns[0].classList.remove("selected");
        modeBtns[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquaers = 3: numSquaers = 6;
        reset();
    });
}

function reset() {
    colors = generateRandomColors(numSquaers);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    massageDisplay.textContent = "";
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];    
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "#232323"
}

// easyBtn.addEventListener("click", function() {
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquaers = 3
//     colors = generateRandomColors(numSquaers);
//     pickedColor = pickColor();
//     colorDisplay = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         if(colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function() {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquaers = 6;
//     colors = generateRandomColors(numSquaers);
//     pickedColor = pickColor();
//     colorDisplay = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function(){
    reset();
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            massageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else {
            this.style.backgroundColor = "#232323";
            massageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}