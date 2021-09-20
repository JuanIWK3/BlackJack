var sum1 = 0;
var sum2 = 0;
var card1;
var cards1 = [];
var card2;
var cards2 = [];
var player1 = false;
var player2 = false;
var gameOn = false;
var gameFinished = true;
var player1finished = false;
var player2finished = false;
var player1wins = 0;
var player2wins = 0;
var ptbr;
function alertclose() {
    document.getElementById("alert-div").style.display = "none";
    document.getElementById("main").style.filter = 'blur(0)';
}
function start() {
    if (gameOn == false && gameFinished == true) {
        gameOn = true;
        gameFinished = false;
        var player = Math.floor(Math.random() * 2) + 1;
        card1 = Math.floor(Math.random() * 10) + 2;
        cards1.push(card1);
        sum1 += card1;
        console.log(cards1);
        card2 = Math.floor(Math.random() * 10) + 2;
        cards2.push(card2);
        sum2 += card2;
        document.getElementById("newcard1").textContent = "Cartas: " + cards1;
        document.getElementById("newcard2").textContent = "Cartas: " + cards2;
        document.getElementById("sum1").textContent = "Soma: " + sum1;
        document.getElementById("sum2").textContent = "Soma: " + sum2;
        document.getElementById("start").textContent = "Fim";
        if (player == 1) {
            //function player1() {
            player1 = true;
            document.getElementById("turn1").style.color = "white";
            document.getElementById("turn2").style.color = "transparent";
            document.getElementById("turn1").textContent = "Sua vez";
            document.getElementById("draw1").style.border = "1px solid orange";
            document.getElementById("stop1").style.border = "1px solid orange";
            document.getElementById("draw2").style.border = "1px solid lightgray";
            document.getElementById("stop2").style.border = "1px solid lightgray";
        }
        if (player == 2) {
            // function player2() {
            player2 = true;
            document.getElementById("turn2").style.color = "white";
            document.getElementById("turn1").style.color = "transparent";
            document.getElementById("turn2").textContent = "Sua vez";
            document.getElementById("draw2").style.border = "1px solid orange";
            document.getElementById("stop2").style.border = "1px solid orange";
            document.getElementById("draw1").style.border = "1px solid lightgray";
            document.getElementById("stop1").style.border = "1px solid lightgray";
        }
    }
    else {
        gameOn = false;
        gameFinished = true;
        document.getElementById("start").textContent = "Jogar";
        card1 = 0;
        card2 = 0;
        cards1 = [];
        cards2 = [];
        sum1 = 0;
        sum2 = 0;
        player1 = false;
        player2 = false;
        player1finished = false;
        player2finished = false;
        document.getElementById("newcard1").textContent = "Cartas: 0";
        document.getElementById("newcard2").textContent = "Cartas: 0";
        document.getElementById("sum1").textContent = "Soma: 0";
        document.getElementById("sum2").textContent = "Soma: 0";
        document.getElementById("turn1").style.color = "transparent";
        document.getElementById("turn2").style.color = "transparent";
        document.getElementById("turn1").textContent = "a";
        document.getElementById("turn2").textContent = "a";
        document.getElementById("draw1").style.border = "1px solid lightgray";
        document.getElementById("stop1").style.border = "1px solid lightgray";
        document.getElementById("draw2").style.border = "1px solid lightgray";
        document.getElementById("stop2").style.border = "1px solid lightgray";
    }
}
function player1won() {
    player1wins++;
    document.getElementById("player1-wins").textContent = String(player1wins);
    document.getElementById("draw1").style.border = "1px solid lightgray";
    document.getElementById("stop1").style.border = "1px solid lightgray";
    document.getElementById("draw2").style.border = "1px solid lightgray";
    document.getElementById("stop2").style.border = "1px solid lightgray";
    document.getElementById("alert-div").style.display = "flex";
    document.getElementById("alert").innerText = 'Jogador 1 venceu!';
    document.getElementById("main").style.filter = 'blur(5px)';
    setTimeout(function () { alertclose(); }, 2000);
}
;
function player2won() {
    player2wins++;
    document.getElementById("player2-wins").textContent = String(player2wins);
    document.getElementById("draw1").style.border = "1px solid lightgray";
    document.getElementById("stop1").style.border = "1px solid lightgray";
    document.getElementById("draw2").style.border = "1px solid lightgray";
    document.getElementById("stop2").style.border = "1px solid lightgray";
    document.getElementById("alert-div").style.display = "flex";
    document.getElementById("alert").innerText = 'Jogador 2 venceu';
    document.getElementById("main").style.filter = 'blur(5px)';
    setTimeout(function () { alertclose(); }, 2000);
}
;
function test() {
    if (sum1 == 21) {
        gameOn = false;
        document.getElementById("turn1").style.color = "transparent";
        document.getElementById("turn2").style.color = "transparent";
        player1won();
    }
    else if (sum2 == 21) {
        gameOn = false;
        document.getElementById("turn1").style.color = "transparent";
        document.getElementById("turn2").style.color = "transparent";
        player2won();
    }
    else if (sum1 > 21) {
        gameOn = false;
        player1finished = true;
        document.getElementById("turn2").style.color = "transparent";
        player2won();
    }
    else if (sum2 > 21) {
        gameOn = false;
        player2finished = true;
        document.getElementById("turn1").style.display = "transparent";
        player1won();
    }
    else if (player1finished == true && player2finished == true) {
        if (sum1 > sum2) {
            player1won();
        }
        else if (sum2 > sum1) {
            player2won();
        }
        else {
            document.getElementById("main").style.filter = 'blur(5px)';
            document.getElementById("alert-div").style.display = "flex";
            document.getElementById("alert").innerText = 'Empate!';
            setTimeout(function () { alertclose(); }, 2000);
        }
    }
}
function draw1() {
    if ((gameOn == true && player1finished == false) && (player2finished == true || player1 == true)) {
        card1 = Math.floor(Math.random() * 10) + 2;
        cards1.push(card1);
        sum1 += card1;
        document.getElementById("newcard1").textContent = "Cartas: " + cards1;
        document.getElementById("sum1").textContent = "Soma: " + sum1;
        if (player2finished == false) {
            // function player2() {
            player1 = false;
            player2 = true;
            document.getElementById("turn2").style.color = "white";
            document.getElementById("turn1").style.color = "transparent";
            document.getElementById("turn2").textContent = "Sua vez";
            document.getElementById("draw2").style.border = "1px solid orange";
            document.getElementById("stop2").style.border = "1px solid orange";
            document.getElementById("draw1").style.border = "1px solid lightgray";
            document.getElementById("stop1").style.border = "1px solid lightgray";
        }
        test();
    }
}
function draw2() {
    if ((gameOn == true && player2finished == false) && (player2 == true || player1finished == true)) {
        card2 = Math.floor(Math.random() * 10) + 2;
        cards2.push(card2);
        sum2 += card2;
        document.getElementById("newcard2").textContent = "Cartas: " + cards2;
        document.getElementById("sum2").textContent = "Soma: " + sum2;
        if (player1finished == false) {
            //function player1() {
            player1 = true;
            player2 = false;
            document.getElementById("turn1").style.color = "white";
            document.getElementById("turn2").style.color = "transparent";
            document.getElementById("turn1").textContent = "Sua vez";
            document.getElementById("draw1").style.border = "1px solid orange";
            document.getElementById("stop1").style.border = "1px solid orange";
            document.getElementById("draw2").style.border = "1px solid lightgray";
            document.getElementById("stop2").style.border = "1px solid lightgray";
        }
        test();
    }
}
function stop1() {
    if (gameOn == true) {
        player1finished = true;
        if (player2finished == false) {
            // function player2() 
            player1 = false;
            player2 = true;
            document.getElementById("turn1").style.color = "white";
            document.getElementById("turn1").textContent = "Parou";
            document.getElementById("turn2").style.color = "white";
            document.getElementById("turn2").textContent = "Sua vez";
            document.getElementById("draw2").style.border = "1px solid orange";
            document.getElementById("stop2").style.border = "1px solid orange";
            document.getElementById("draw1").style.border = "1px solid lightgray";
            document.getElementById("stop1").style.border = "1px solid lightgray";
        }
        else {
            test();
        }
    }
}
function stop2() {
    if (gameOn == true) {
        player2finished = true;
        document.getElementById("turn2").textContent = "Parou";
        if (player1finished == false) {
            //function player1() {
            player1 = true;
            player2 = false;
            document.getElementById("turn2").style.color = "white";
            document.getElementById("turn1").style.color = "white";
            document.getElementById("turn1").textContent = "Sua vez";
            document.getElementById("draw1").style.border = "1px solid orange";
            document.getElementById("stop1").style.border = "1px solid orange";
            document.getElementById("draw2").style.border = "1px solid lightgray";
            document.getElementById("stop2").style.border = "1px solid lightgray";
        }
        else {
            test();
        }
    }
}
var rule = false;
function rules() {
    if (rule == false) {
        document.getElementById("rules").textContent = "";
        rule = true;
    }
    else {
        document.getElementById("rules").textContent = "Quando o jogo começa, ambos os jogadores recebem uma carta aleatória. O primeiro a jogar é selecionado aleatoriamente. Você pode pedir uma nova carta ou parar. O jogador ganha se conseguir a soma igual a 21 ou ter a soma maior após ambos jogadores pararem";
        rule = false;
    }
}
