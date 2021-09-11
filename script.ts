let sum1 = 0;
let sum2 = 0;
let player1 = false;
let player2 = false;
let gameOn = false;
let gameFinished = true;
let player1finished = false;
let player2finished = false;
let player1wins = 0;
let player2wins = 0;
var card1: number;
var card2: number;

// card1 = Math.floor(Math.random() * 10) + 2

function start() {
    if (gameOn == false && gameFinished == true) {
        gameOn = true;
        gameFinished = false;

        let player = Math.floor(Math.random() * 2) + 1

        let card1 = Math.floor(Math.random() * 10) + 2
        sum1 += card1;

        let card2 = Math.floor(Math.random() * 10) + 2
        sum2 += card2;

        document.getElementById("newcard1").textContent = "New: " + card1;
        document.getElementById("newcard2").textContent = "New: " + card2;
        document.getElementById("sum1").textContent = "Sum: " + sum1;
        document.getElementById("sum2").textContent = "Sum: " + sum2;
        document.getElementById("start").textContent = "Finish";

        if (player == 1) {
            //function player1() {
            player1 = true;
            document.getElementById("turn1").style.color = "white";
            document.getElementById("turn2").style.color = "transparent";
            document.getElementById("turn1").textContent = "Your turn!";
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
            document.getElementById("turn2").textContent = "Your turn!";
            document.getElementById("draw2").style.border = "1px solid orange";
            document.getElementById("stop2").style.border = "1px solid orange";
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
    alert("Player 1 won!!")
    player1wins++;
    document.getElementById("player1-wins").textContent = String(player1wins);
    document.getElementById("draw1").style.border = "1px solid lightgray";
    document.getElementById("stop1").style.border = "1px solid lightgray";
    document.getElementById("draw2").style.border = "1px solid lightgray";
    document.getElementById("stop2").style.border = "1px solid lightgray";

};
function player2won() {
    alert("Player 2 won!!")
    player2wins++;
    document.getElementById("player2-wins").textContent = String(player2wins);
    document.getElementById("draw1").style.border = "1px solid lightgray";
    document.getElementById("stop1").style.border = "1px solid lightgray";
    document.getElementById("draw2").style.border = "1px solid lightgray";
    document.getElementById("stop2").style.border = "1px solid lightgray";
};

function test() {
    if (sum1 == 21) {
        gameOn = false;
        document.getElementById("turn2").style.color = "transparent";
        player1won();
    }
    else if (sum2 == 21) {
        gameOn = false;
        document.getElementById("turn1").style.color = "transparent";
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
        document.getElementById("turn1").style.color = "transparent";
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
            alert("The game ended with a tie!")
        }
    }
}

function draw1() {
    if ((gameOn == true && player1finished == false) && (player2finished == true || player1 == true)) {
        card1 = Math.floor(Math.random() * 10) + 2;
        sum1 += card1;
        document.getElementById("newcard1").textContent = "New: " + card1;
        document.getElementById("sum1").textContent = "Sum: " + sum1;

        if (player2finished == false) {
            // function player2() {
            player1 = false;
            player2 = true;
            document.getElementById("turn2").style.color = "white";
            document.getElementById("turn1").style.color = "transparent";
            document.getElementById("turn2").textContent = "Your turn!";
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
        sum2 += card2;
        document.getElementById("newcard2").textContent = "New: " + card2;
        document.getElementById("sum2").textContent = "Sum: " + sum2;

        if (player1finished == false) {
            //function player1() {
            player1 = true;
            player2 = false;
            document.getElementById("turn1").style.color = "white";
            document.getElementById("turn2").style.color = "transparent";
            document.getElementById("turn1").textContent = "Your turn!";
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
            document.getElementById("turn1").textContent = "Stopped"
            document.getElementById("turn2").style.color = "white";
            document.getElementById("turn2").textContent = "Your turn!";
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
        document.getElementById("turn2").textContent = "Stopped"

        if (player1finished == false) {
            //function player1() {
            player1 = true;
            player2 = false;
            document.getElementById("turn2").style.color = "white";
            document.getElementById("turn1").style.color = "white";
            document.getElementById("turn1").textContent = "Your turn!";
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

let rule = false

function rules() {
    if (rule == false) {
        document.getElementById("rules").textContent = "When the game starts, both players receive a random card. The first player will be randomly selected. You can draw a new card or stop. You win when the sum equals 21 or your sum is greater after both players stop"
        rule = true;

    }
    else {
        document.getElementById("rules").textContent = ""
        rule = false;
    }
}