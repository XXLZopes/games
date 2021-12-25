let colorChanging = document.querySelector(".color-changing");


let colors = [, "#FFA500", "#EAE300", "#008000", "#0000FF", "#7F00FF", "#FF0000"];
//                orange     yellow      green     blue       purple       red

let colorIndex = 0;

let changeColor = () => {
    colorChanging.style.color=colors[colorIndex];
    colorIndex++;
    if (colorIndex == colors.length) {
        colorIndex=0;
    }
}

setInterval(changeColor, 1000);

let screen = document.querySelector("#screen")
let divSelector = 22; //move the dot
let pastDivSelector = divSelector;

for (let i = 0; i < 400; i++) {
    screen.append(document.createElement("div"));
}

document.getElementsByTagName("DIV")[divSelector].style.backgroundColor= "black";

let buttonUp = document.querySelector("#button-up");
let buttonDown = document.querySelector("#button-down");
let buttonLeft = document.querySelector("#button-left");
let buttonRight = document.querySelector("#button-right");
let checkButtonUp = false;
let checkButtonDown = false;
let checkButtonLeft = false;
let checkButtonRight = false;
let interval;

let move = () => {
    document.getElementsByTagName("DIV")[divSelector].style.backgroundColor= "black";
    document.getElementsByTagName("DIV")[pastDivSelector].style.backgroundColor= "rgb(129, 147, 48)";
}
let moveUp = () => {
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
let moveDown = () => {
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
let moveRight = () => {
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
let moveLeft = () => {
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

let setButtonsFalse = () => {
    checkButtonUp = false;
    checkButtonDown = false;
    checkButtonLeft = false;
    checkButtonRight = false;
}


buttonUp.addEventListener('click', () => {
    if (!checkButtonUp) {
        setButtonsFalse();
        moveUp();
        clearInterval(interval);
        interval = setInterval(moveUp, 500);
    }
    checkButtonUp = true;

})
buttonDown.addEventListener('click', () => {
    if (!checkButtonDown) {
        setButtonsFalse();
        moveDown();
        clearInterval(interval);
        interval = setInterval(moveDown, 500);
    }
    checkButtonDown = true;
    
})
buttonRight.addEventListener('click', () => {
    if (!checkButtonRight) {
        setButtonsFalse();
        moveRight();
        clearInterval(interval);
        interval = setInterval(moveRight, 500);
    }
    checkButtonRight = true;

})
buttonLeft.addEventListener('click', () => {
    if (!checkButtonLeft) {
        setButtonsFalse();
        moveLeft();
        clearInterval(interval);
        interval = setInterval(moveLeft, 500);
    }

    checkButtonLeft = true;
    
})

//For snake game...

//√√√ get dot moving in 1 direction √√√ 

//√√√ add ability to change direction and keep dot moving in that direction √√√

//add ability to add on dots to create snake of dots moving in 1 direction

//add ability to move direction of snake

//add random dot

//have it so when snake hits random dot it grows +1 in length

//have it so when snake hits itself you lose.
