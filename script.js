let sum1 = 0;
let sum2 = 0;
player1 = false;
player2 = false;
gameStarted = false;
player1finished = false;
player2finished = false;
let player1wins = 0;
let player2wins = 0;




function start() {
    if (gameStarted == false) {
        document.getElementById("start").style.border = "1px solid lightgray"
        player = Math.floor(Math.random() * 2) + 1

        let card1 = Math.floor(Math.random() * 10) + 2
        document.getElementById("newcard1").textContent = "New card: " + card1;
        sum1 += card1
        document.getElementById("p1card").textContent = "Sum: " + sum1;

        let card2 = Math.floor(Math.random() * 10) + 2
        document.getElementById("newcard2").textContent = "New card: " + card2;
        sum2 += 10
        document.getElementById("p2card").textContent = "Sum: " + sum2;

        if (player == 1) {
            player1 = true
            player2 = false
            document.getElementById("turn1").textContent = "Your Turn"
            document.getElementById("p1draw").style.border = "1px solid rgb(0, 231, 247)";
            document.getElementById("stop1").style.border = "1px solid rgb(0, 231, 247)";

        }
        else if (player == 2) {
            player2 = true
            player1 = false
            document.getElementById("turn2").textContent = "Your Turn"
            document.getElementById("p2draw").style.border = "1px solid rgb(255, 60, 60)";
            document.getElementById("stop2").style.border = "1px solid rgb(255, 60, 60)";

        }

        gameStarted = true;
        document.getElementById("start").textContent = "Finish"
    } else {
        function finish() {
            document.getElementById("p1card").textContent = "Sum: 0"
            document.getElementById("p2card").textContent = "Sum: 0"
            document.getElementById("newcard1").textContent = "New card: 0"
            document.getElementById("newcard2").textContent = "New card: 0"
            sum1 = 0
            sum2 = 0
            document.getElementById("turn1").textContent = ""
            document.getElementById("turn2").textContent = ""
            gameStarted = false;
            document.getElementById("start").textContent = "Start"
            player1finished = false;
            player2finished = false;
            player = 0
            document.getElementById("msg1").textContent = ""
            document.getElementById("msg2").textContent = ""
            document.getElementById("p2draw").style.border = "1px solid lightgray";
            document.getElementById("stop2").style.border = "1px solid lightgray";
            document.getElementById("p1draw").style.border = "1px solid lightgray";
            document.getElementById("stop1").style.border = "1px solid lightgray";
            document.getElementById("start").style.border = "1px solid lightgreen";
        }
        finish()
    }
}

function draw1() {
    if ((player1 == true || player2finished == true) && player1finished == false) {
        let card1 = Math.floor(Math.random() * 10) + 2
        document.getElementById("newcard1").textContent = "New card: " + card1;
        sum1 += card1
        document.getElementById("p1card").textContent = "Sum: " + sum1;
        player1 = false
        player2 = true
        if (player2finished == false) {
            document.getElementById("turn1").textContent = ""
            document.getElementById("turn2").textContent = "Your Turn"
            document.getElementById("p1draw").style.border = "1px solid lightgray";
            document.getElementById("stop1").style.border = "1px solid lightgray";
            document.getElementById("p2draw").style.border = "1px solid rgb(255, 60, 60)";
            document.getElementById("stop2").style.border = "1px solid rgb(255, 60, 60)";

        }
    }
    if (sum1 > 21) {
        player1finished = true
        document.getElementById("msg1").textContent = "You're out"
        alert("Player 2 won")
        player2wins += 1;
        document.getElementById("player2-wins").textContent = player2wins;
    }
    if (sum1 == 21) {
        alert("Player 1 won")
        player1wins += 1;
        document.getElementById("player1-wins").textContent = player1wins;
    }
}

function draw2() {
    if ((player2 == true || player1finished == true) && player2finished == false) {
        let card2 = Math.floor(Math.random() * 10) + 2
        document.getElementById("newcard2").textContent = "New card: " + card2;
        sum2 += card2
        document.getElementById("p2card").textContent = "Sum: " + sum2;
        player2 = false
        player1 = true
        if (player1finished == false) {
            document.getElementById("turn1").textContent = "Your Turn"
            document.getElementById("turn2").textContent = ""
            document.getElementById("p1draw").style.border = "1px solid rgb(0, 231, 247)";
            document.getElementById("stop1").style.border = "1px solid rgb(0, 231, 247)";
            document.getElementById("p2draw").style.border = "1px solid lightgray";
            document.getElementById("stop2").style.border = "1px solid lightgray";
        }
    }
    if (sum2 > 21) {
        player2finished = true
        document.getElementById("msg2").textContent = "You're out"
        alert("Player 1 won")
        player1wins += 1;
        document.getElementById("player1-wins").textContent = player1wins;
    }
    if (sum2 == 21) {
        alert("Player 2 won")
        player2wins += 1;
        document.getElementById("player2-wins").textContent = player2wins;
    }
}

function stop1() {
    player1finished = true

    if (player2finished == false) {
        document.getElementById("turn1").textContent = ""
        document.getElementById("turn2").textContent = "Your Turn"
    }

    if (player1finished == true && player2finished == true) {
        if (sum1 > sum2 && sum1 < 21) {
            alert("Player 1 Won");
            player1wins += 1;
            document.getElementById("player1-wins").textContent = player1wins;
        }
        else if (sum1 == sum2) {
            alert("The game ended with a draw")
        }
        else if (sum2 > sum1 && sum2 < 21) {
            alert("Player 2 Won");
            player2wins += 1;
            document.getElementById("player2-wins").textContent = player2wins;
        }
    }
    document.getElementById("msg1").textContent = "Stopped"

}

function stop2() {
    player2finished = true

    if (player1finished == false) {
        document.getElementById("turn1").textContent = "Your Turn"
        document.getElementById("turn2").textContent = ""
    }

    if (player1finished == true && player2finished == true) {
        if (sum1 > sum2 && sum1 < 21) {
            alert("Player 1 Won");
            player1wins += 1;
            document.getElementById("player1-wins").textContent = player1wins;
        }
        else if (sum1 == sum2) {
            alert("The game ended with a draw")
        }
        else if (sum2 > sum1 && sum2 < 21) {
            alert("Player 2 Won");
            player2wins += 1;
            document.getElementById("player2-wins").textContent = player2wins;
        }
    }
    document.getElementById("msg2").textContent = "Stopped"
}

rule = false;

function rules() {
    if (rule == false) {
        document.getElementById("rules").textContent = "When the game starts, both players will receive a random card and a player will be randomly chosen. You can draw a new card or stop. The player that have the sum equals 21 or the greater sum after both players stopped will win. If the sum exceeds 21, he will lose."
        rule = true;
    }
    else if (rule == true) {
        document.getElementById("rules").textContent = ""
        rule = false;
    }
}