let sum1 = 0;
let sum2 = 0;
player1 = false;
player2 = false;
gameOn = false;
gameFinished = true;
player1finished = false;
player2finished = false;
let player1wins = 0;
let player2wins = 0;

// card1 = Math.floor(Math.random() * 10) + 2




function start() {
    if (gameOn == false & gameFinished == true) {
        gameOn = true;
        gameFinished = false;

        player = Math.floor(Math.random() * 2) + 1

        card1 = Math.floor(Math.random() * 10) + 2
        sum1 += card1;

        card2 = Math.floor(Math.random() * 10) + 2
        sum2 += card2;

        document.getElementById("newcard1").textContent = "New: " + card1;
        document.getElementById("newcard2").textContent = "New: " + card2;
        document.getElementById("sum1").textContent = "Sum: " + sum1;
        document.getElementById("sum2").textContent = "Sum: " + sum2;
        document.getElementById("start").textContent = "Finish";

        if (player == 1) {
            //function player1() {
            player1 = true;
            document.getElementById("turn1").style.color = "black";
            document.getElementById("turn2").style.color = "white";
            document.getElementById("turn1").textContent = "Your turn!";
            document.getElementById("draw1").style.border = "1px solid aqua";
            document.getElementById("stop1").style.border = "1px solid aqua";
            document.getElementById("draw2").style.border = "1px solid lightgray";
            document.getElementById("stop2").style.border = "1px solid lightgray";
        }
        if (player == 2) {
            // function player2() {
            player2 = true;
            document.getElementById("turn2").style.color = "black";
            document.getElementById("turn1").style.color = "white";
            document.getElementById("turn2").textContent = "Your turn!";
            document.getElementById("draw2").style.border = "1px solid red";
            document.getElementById("stop2").style.border = "1px solid red";
            document.getElementById("draw1").style.border = "1px solid lightgray";
            document.getElementById("stop1").style.border = "1px solid lightgray";
        }
    }
    else {
        gameOn = false;
        gameFinished = true;
        document.getElementById("start").textContent = "Start";
        card1 = 0;
        card2 = 0;
        sum1 = 0;
        sum2 = 0;
        player1 = false;
        player2 = false;
        player1finished = false;
        player2finished = false;
        document.getElementById("newcard1").textContent = "New: 0"
        document.getElementById("newcard2").textContent = "New: 0"
        document.getElementById("sum1").textContent = "Sum: 0"
        document.getElementById("sum2").textContent = "Sum: 0"

        document.getElementById("turn1").style.color = "white";
        document.getElementById("turn2").style.color = "white";


        document.getElementById("draw1").style.border = "1px solid lightgray";
        document.getElementById("stop1").style.border = "1px solid lightgray";
        document.getElementById("draw2").style.border = "1px solid lightgray";
        document.getElementById("stop2").style.border = "1px solid lightgray";

    }
}
function test() {
    if (sum1 == 21) {
        gameOn = false;
        document.getElementById("turn2").style.color = "white";
        alert("Player 1 won!!")
    }
    if (sum2 == 21) {

        document.getElementById("turn1").style.color = "white";
        alert("Player 2 won!!")
    }
    else if (sum1 > 21) {
        gameOn = false;
        player1finished = true;
        document.getElementById("turn2").style.color = "white";
        alert("Player 2 won!!")
    }
    else if (sum2 > 21) {
        gameOn = false;
        player2finished = true;
        document.getElementById("turn1").style.color = "white";
        alert("Player 1 won!!")
    }
}

function draw1() {
    if ((gameOn == true) && (player2finished == true || player1 == true)) {
        card1 = Math.floor(Math.random() * 10) + 2;
        sum1 += card1;
        document.getElementById("newcard1").textContent = "New: " + card1;
        document.getElementById("sum1").textContent = "Sum: " + sum1;
        // function player2() {
        player1 = false;
        player2 = true;
        document.getElementById("turn2").style.color = "black";
        document.getElementById("turn1").style.color = "white";
        document.getElementById("turn2").textContent = "Your turn!";
        document.getElementById("draw2").style.border = "1px solid red";
        document.getElementById("stop2").style.border = "1px solid red";
        document.getElementById("draw1").style.border = "1px solid lightgray";
        document.getElementById("stop1").style.border = "1px solid lightgray";


        test();
    }
}
function draw2() {
    if ((gameOn == true) && (player2 == true || player1finished == true)) {
        card2 = Math.floor(Math.random() * 10) + 2;
        sum2 += card2;
        document.getElementById("newcard2").textContent = "New: " + card2;
        document.getElementById("sum2").textContent = "Sum: " + sum2;
        //function player1() {
        player1 = true;
        player2 = false;
        document.getElementById("turn1").style.color = "black";
        document.getElementById("turn2").style.color = "white";
        document.getElementById("turn1").textContent = "Your turn!";
        document.getElementById("draw1").style.border = "1px solid aqua";
        document.getElementById("stop1").style.border = "1px solid aqua";
        document.getElementById("draw2").style.border = "1px solid lightgray";
        document.getElementById("stop2").style.border = "1px solid lightgray";

        test();
    }
}