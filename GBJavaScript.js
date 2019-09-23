var ligado = false;
var telaGB = document.getElementById("telaDentro");
var luzBat = document.getElementById("luzBateria");
var setaTop = document.getElementById("btnSetaTop");
var bordaLeft1 = document.getElementById("bordaLeft1");
var setaLeft = document.getElementById("btnSetaLeft");
var setaMeio = document.getElementById("btnSetaMeio");
var setaRight = document.getElementById("btnSetaRight");
var setaBot = document.getElementById("btnSetaBot");
var bordaLeft2 = document.getElementById("bordaLeft2");
var btnA1 = document.getElementById("btnA1");
var btnA2 = document.getElementById("btnA2");
var btnA3 = document.getElementById("btnA3");
var btnA4 = document.getElementById("btnA4");
var btnB1 = document.getElementById("btnB1");
var btnB2 = document.getElementById("btnB2");
var btnB3 = document.getElementById("btnB3");
var btnB4 = document.getElementById("btnB4");

function ligaDesliga() {
    if(ligado == false) {
        telaGB.src = "https://i.imgur.com/rqjMIVn.gif";
        telaGB.style.backgroundColor = "#cbcbac";
        telaGB.style.backgroundSize = "contain";
        luzBat.style.backgroundColor = "red";
        ligado = true;
        setTimeout(function() {telaGB.src="https://media.giphy.com/media/JSj5bkV1UIaXH8iCZM/giphy.gif";}, 2000);
        setTimeout(function() {telaGB.src="https://media.giphy.com/media/dBfkKQgrvyBYwrMNYy/giphy.gif";}, 15000);
        setTimeout(function() {telaGB.src="https://jogoveio.com.br/wp-content/uploads/2017/05/pokemon-red-jogoveio.gif";}, 22000);
        //https://i.gifer.com/39BF.gif
    } else {
        telaGB.src = "";
        telaGB.style.backgroundColor = "goldenrod";
        luzBat.style.backgroundColor = "darkred";
        ligado = false;
    }
}

function clickSetaTop() {
    setaTop.style.border = "unset";
    bordaLeft1.style.border = "unset";
    setaTop.style.backgroundImage = "-moz-linear-gradient(top,  #45484d 0%, #000000 46%)";
    setaLeft.style.backgroundImage = "-moz-linear-gradient(top,  #45484d 0%, #000000 46%)";
    setaRight.style.backgroundImage = "-moz-linear-gradient(top,  #45484d 0%, #000000 46%)";
    setaMeio.style.backgroundImage = "unset";
    setaMeio.style.backgroundColor = "black";
    setaMeio.style.border = "unset";
    setaBot.style.backgroundImage = "unset";
    setaBot.style.backgroundColor = "black";
}

function desclickSetaTop() {
    setaTop.style.borderTop = "3px solid white";
    bordaLeft1.style.borderRight = "2px solid white";
    setaTop.style.backgroundImage = "-moz-linear-gradient(top,  #000000 54%, #45484d 100%)";
    setaRight.style.backgroundImage = "-moz-linear-gradient(left,  #45484d 0%, #000000 46%)";
    setaLeft.style.backgroundImage = "-moz-linear-gradient(left,  #000000 54%, #45484d 100%)";
    setaBot.style.backgroundImage = "-moz-linear-gradient(top,  #45484d 0%, #000000 46%)";
    setaMeio.style.backgroundImage = "radial-gradient(black, #45484d)";
}

function clickSetaBot() {
    setaBot.style.border = "unset";
    bordaLeft2.style.border = "unset";
    setaBot.style.backgroundImage = "-moz-linear-gradient(top,  #000000 54%, #45484d 100%)";
    setaLeft.style.backgroundImage = "-moz-linear-gradient(top,  #000000 54%, #45484d 100%)";
    setaRight.style.backgroundImage = "-moz-linear-gradient(top,  #000000 54%, #45484d 100%)";
    setaMeio.style.backgroundImage = "unset";
    setaMeio.style.backgroundColor = "black";
    setaMeio.style.border = "unset";
    setaTop.style.backgroundImage = "unset";
    setaTop.style.backgroundColor = "black";
}

function desclickSetaBot() {
    setaTop.style.backgroundImage = "-moz-linear-gradient(top,  #000000 54%, #45484d 100%)";
    setaRight.style.backgroundImage = "-moz-linear-gradient(left,  #45484d 0%, #000000 46%)";
    setaLeft.style.backgroundImage = "-moz-linear-gradient(left,  #000000 54%, #45484d 100%)";
    setaBot.style.backgroundImage = "-moz-linear-gradient(top,  #45484d 0%, #000000 46%)";
    setaMeio.style.backgroundImage = "radial-gradient(black, #45484d)";
    bordaLeft2.style.borderRight = "2px solid white";
}

function clickSetaLeft() {
    bordaLeft2.style.border = "unset";
    bordaLeft1.style.border = "unset";
    setaLeft.style.border = "unset";
    setaLeft.style.backgroundImage = "-moz-linear-gradient(left,  #45484d 0%, #000000 46%)";
    setaTop.style.backgroundImage = "-moz-linear-gradient(left,  #45484d 0%, #000000 46%)";
    setaBot.style.backgroundImage = "-moz-linear-gradient(left,  #45484d 0%, #000000 46%)";
    setaMeio.style.backgroundImage = "unset";
    setaMeio.style.backgroundColor = "black";
    setaMeio.style.border = "unset";
    setaRight.style.backgroundImage = "unset";
    setaRight.style.backgroundColor = "black";
    document.getElementById("btnSetas").style.marginLeft = "42px";
}

function desclickSetaLeft() {
    setaTop.style.backgroundImage = "-moz-linear-gradient(top,  #000000 54%, #45484d 100%)";
    setaRight.style.backgroundImage = "-moz-linear-gradient(left,  #45484d 0%, #000000 46%)";
    setaLeft.style.backgroundImage = "-moz-linear-gradient(left,  #000000 54%, #45484d 100%)";
    setaBot.style.backgroundImage = "-moz-linear-gradient(top,  #45484d 0%, #000000 46%)";
    setaMeio.style.backgroundImage = "radial-gradient(black, #45484d)";
    bordaLeft1.style.borderRight = "2px solid white";
    bordaLeft2.style.borderRight = "2px solid white";
    setaLeft.style.borderLeft = "2px solid white";
    setaLeft.style.borderTop = "3px solid white";
    document.getElementById("btnSetas").style.marginLeft = "40px";
}

function clickSetaRight() {
    setaBot.style.backgroundImage = "-moz-linear-gradient(left,  #000000 54%, #45484d 100%)";
    setaTop.style.backgroundImage = "-moz-linear-gradient(left,  #000000 54%, #45484d 100%)";
    setaRight.style.backgroundImage = "-moz-linear-gradient(left,  #000000 54%, #45484d 100%)";
    setaLeft.style.backgroundImage = "unset";
    setaLeft.style.backgroundColor = "black";
    setaMeio.style.backgroundImage = "unset";
    setaMeio.style.backgroundColor = "black";
    setaRight.style.border = "unset";
}

function desclickSetaRight() {
    setaTop.style.backgroundImage = "-moz-linear-gradient(top,  #000000 54%, #45484d 100%)";
    setaRight.style.backgroundImage = "-moz-linear-gradient(left,  #45484d 0%, #000000 46%)";
    setaLeft.style.backgroundImage = "-moz-linear-gradient(left,  #000000 54%, #45484d 100%)";
    setaBot.style.backgroundImage = "-moz-linear-gradient(top,  #45484d 0%, #000000 46%)";
    setaMeio.style.backgroundImage = "radial-gradient(black, #45484d)";  
    setaRight.style.borderTop = "3px solid white";  
}

function clickA() {
    btnA1.style.backgroundColor = "darkred";
    btnA2.style.backgroundColor = "darkred";
    btnA3.style.backgroundColor = "darkred";
    btnA4.style.backgroundColor = "darkred";
    btnA1.style.borderTop = "unset";
    btnA1.style.borderLeft = "unset"; 
    btnA2.style.borderTop = "unset";
    btnA3.style.borderLeft = "unset";
    btnA4.style.borderRight = "2px solid black";
    btnA4.style.borderBottom = "2px solid black";
    btnA3.style.borderBottom = "2px solid black";
    btnA2.style.borderRight = "2px solid black";
}

function desclickA() {
    btnA1.style.backgroundColor = "red";
    btnA2.style.backgroundColor = "red";
    btnA3.style.backgroundColor = "red";
    btnA4.style.backgroundColor = "red";
    btnA1.style.borderTop = "2px solid white";
    btnA1.style.borderLeft = "2px solid white"; 
    btnA2.style.borderTop = "2px solid white";
    btnA3.style.borderLeft = "2px solid white";
    btnA2.style.borderRight = "unset";
    btnA3.style.borderBottom = "unset";
    btnA4.style.border = "unset";
}

function clickB() {
    btnB1.style.backgroundColor = "darkred";
    btnB2.style.backgroundColor = "darkred";
    btnB3.style.backgroundColor = "darkred";
    btnB4.style.backgroundColor = "darkred";
    btnB1.style.borderTop = "unset";
    btnB1.style.borderLeft = "unset"; 
    btnB2.style.borderTop = "unset";
    btnB3.style.borderLeft = "unset";
    btnB4.style.borderRight = "2px solid black";
    btnB4.style.borderBottom = "2px solid black";
    btnB3.style.borderBottom = "2px solid black";
    btnB2.style.borderRight = "2px solid black";
}

function desclickB() {
    btnB1.style.backgroundColor = "red";
    btnB2.style.backgroundColor = "red";
    btnB3.style.backgroundColor = "red";
    btnB4.style.backgroundColor = "red";
    btnB1.style.borderTop = "2px solid white";
    btnB1.style.borderLeft = "2px solid white"; 
    btnB2.style.borderTop = "2px solid white";
    btnB3.style.borderLeft = "2px solid white";
    btnB2.style.borderRight = "unset";
    btnB3.style.borderBottom = "unset";
    btnB4.style.border = "unset";
}