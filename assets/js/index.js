let colorChanging = document.querySelector(".color-changing");


let colors = ["#FF0000", "#FFA500", "#EAE300", "#008000", "#0000FF", "#7F00FF"];
//              red        orange     yellow      green     blue        purple

i = 0;

let changeColor = () => {
    colorChanging.style.color=colors[i];
    i++
    if (i == colors.length) {
        i=0
    }
}

setInterval(changeColor, 1000)