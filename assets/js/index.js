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



let buttonUp = document.querySelector("#button-up");
let buttonDown = document.querySelector("#button-down");
let buttonLeft = document.querySelector("#button-left");
let buttonRight = document.querySelector("#button-right");
let checkButtonUp = false;
let checkButtonDown = false;
let checkButtonLeft = false;
let checkButtonRight = false;
let interval;
//Youngest to oldest [y, o];
let snakePath = [402, 171, 172];

document.getElementsByTagName("DIV")[snakePath[0]].style.backgroundColor= "black";

let removeMove = () => {
    if (snakePath.length > 1) {
        document.getElementsByTagName("DIV")[snakePath[snakePath.length - 1]].style.backgroundColor= "rgb(129, 147, 48)";
        snakePath.pop();
    }
}
let addMoveUp = () => {  
    if ((snakePath[0] - 3) % 20 === 0) {
        snakePath.unshift(snakePath[0] + 19);
    } else {
        snakePath.unshift(snakePath[0] - 1);
    }
    // console.log(snakePath + " Up");
    for (let i = 0; i < snakePath.length; i++) {  
        document.getElementsByTagName("DIV")[snakePath[i]].style.backgroundColor= "black";
        
    }
}
let addMoveDown = () => {
    if ((snakePath[0] - 2) % 20 === 0) {
        snakePath.unshift(snakePath[0] - 19);
    } else {
        snakePath.unshift(snakePath[0] + 1);
    }
    // console.log(snakePath + " Down");
    for (let i = 0; i < snakePath.length; i++) {  
        document.getElementsByTagName("DIV")[snakePath[i]].style.backgroundColor= "black";
    }
}
let addMoveLeft = () => {

    if ((snakePath[0] < 23)) {
        snakePath.unshift(snakePath[0] + 380);
    } else {
        snakePath.unshift(snakePath[0] - 20);
    }
    // console.log(snakePath + " Left");
    for (let i = 0; i < snakePath.length; i++) {
        document.getElementsByTagName("DIV")[snakePath[i]].style.backgroundColor= "black";
    }
}
let addMoveRight = () => {

    if ((snakePath[0] - 383) >= 0) {
        snakePath.unshift(snakePath[0] - 380);
    } else {
        snakePath.unshift(snakePath[0] + 20);
    }
    // console.log(snakePath + " Right");
    for (let i = 0; i < snakePath.length; i++) {
        document.getElementsByTagName("DIV")[snakePath[i]].style.backgroundColor= "black";
    }
}
let moveUp = () => {
        
        
        addMoveUp();
        removeMove();
        usePowerUp(addMoveUp);
}
let moveDown = () => {
    
   
    addMoveDown();
    removeMove();
    usePowerUp(addMoveDown);
}
let moveLeft = () => {
   
    
    addMoveLeft();
    removeMove(); 
    usePowerUp(addMoveLeft);
}
let moveRight = () => {
    
    
    addMoveRight();
    removeMove();
    usePowerUp(addMoveRight);
}

let setButtonsFalse = () => {
    checkButtonUp = false;
    checkButtonDown = false;
    checkButtonLeft = false;
    checkButtonRight = false;
}


buttonUp.addEventListener('click', () => {
    if (!checkButtonUp && !checkButtonDown) {
        setButtonsFalse();
        moveUp();
        clearInterval(interval);
        interval = setInterval(moveUp, 500);
    }
    checkButtonUp = true;

})
buttonDown.addEventListener('click', () => {
    if (!checkButtonDown && !checkButtonUp) {
        setButtonsFalse();
        moveDown();
        clearInterval(interval);
        interval = setInterval(moveDown, 500);
    }
    checkButtonDown = true;
    
})
buttonLeft.addEventListener('click', () => {
    if (!checkButtonLeft && !checkButtonRight) {
        setButtonsFalse();
        moveLeft();
        clearInterval(interval);
        interval = setInterval(moveLeft, 500);
    }

    checkButtonLeft = true;
    
})
buttonRight.addEventListener('click', () => {
    if (!checkButtonRight && !checkButtonLeft) {
        setButtonsFalse();
        moveRight();
        clearInterval(interval);
        interval = setInterval(moveRight, 500);
    }
    checkButtonRight = true;

})

//Create random Dot
let powerLocations = [];
let spawnPowerUp = () => {
    powerLocations.unshift(parseInt((Math.random() * 402) + 1));
    document.getElementsByTagName("DIV")[powerLocations[0]].style.backgroundColor= "black";
}
spawnPowerUp();

let usePowerUp = (addMove) => {
    for (let i = 0; i < powerLocations.length; i++) {
        for (let j = 0; j < powerLocations.length; j++) {
            if (snakePath[i] === powerLocations[j]) {
                addMove();
                powerLocations.splice(i, 1);
                spawnPowerUp();
            }
        }
    }
}
//For snake game...

//√√√ get dot moving in 1 direction √√√ 

//√√√ add ability to change direction and keep dot moving in that direction √√√

//√√√ add ability to add on dots to create snake of dots moving in 1 direction √√√
    /*
        1. Create path array  
        2. Add point to snake wherever path in array
        3. Remove point from snake whenever point is removed from path array
        2. Ability to add grid location to path array
    */

//√√√ add ability to move direction of snake √√√

//√√√add random dot√√√

//√√√have it so when snake hits random dot it grows +1 in length√√√

//have it so when snake hits itself you lose.
