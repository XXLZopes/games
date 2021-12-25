let colorChanging = document.querySelector(".color-changing");


let colors = ["#FF0000", "#FFA500", "#EAE300", "#008000", "#0000FF", "#7F00FF"];
//              red        orange     yellow      green     blue        purple

let colorIndex = 0;

let changeColor = () => {
    colorChanging.style.color=colors[colorIndex];
    colorIndex++
    if (colorIndex == colors.length) {
        colorIndex=0
    }
}

setInterval(changeColor, 1000);

let screen = document.querySelector("#screen")
let gridColumnY = 19;
let gridHeight = 1;
let gridRowX = 1;
let gridWidth = 1;
let i = 1;
let divSelector = 3; //move the dot
let pastDivSelector = divSelector;
let flash = true;

for (let i = 0; i < 400; i++) {
    screen.append(document.createElement("div"));
}

document.getElementsByTagName("DIV")[divSelector].style.backgroundColor= "black";

let buttonUp = document.querySelector("#button-up");
let buttonDown = document.querySelector("#button-down");
let buttonLeft = document.querySelector("#button-left");
let buttonRight = document.querySelector("#button-right");

move = () => {
    document.getElementsByTagName("DIV")[divSelector].style.backgroundColor= "black";
    document.getElementsByTagName("DIV")[pastDivSelector].style.backgroundColor= "rgb(129, 147, 48)";
}
moveUp = () => {
    if ((divSelector - 3) % 20 === 0) {
        divSelector+=19
        move();
        pastDivSelector = divSelector;
    } else {
        divSelector--;
        move();
        pastDivSelector = divSelector;
    }
}
moveDown = () => {
    if ((divSelector - 2) % 20 === 0) {
        divSelector-=19
        move();
        pastDivSelector = divSelector;
    } else {
        divSelector++;
        move();
        pastDivSelector = divSelector;
    }
}
moveRight = () => {
    if ((divSelector - 383) >= 0) {
        divSelector -= 380;
        move();
        pastDivSelector = divSelector;
    } else {
        divSelector += 20;
        move();
        pastDivSelector = divSelector;
    }
}
moveLeft = () => {
    if ((divSelector < 23)) {
        divSelector += 380;
        move();
        pastDivSelector = divSelector;
    } else {
        divSelector -= 20;
        move();
        pastDivSelector = divSelector;
    }
}

buttonUp.addEventListener('click', () => {
    flash = false;
    moveUp();
})
buttonDown.addEventListener('click', () => {
    flash = false;
    moveDown();
})
buttonRight.addEventListener('click', () => {
    flash = false;
    moveRight();
})
buttonLeft.addEventListener('click', () => {
    flash = false;
    moveLeft();
})
