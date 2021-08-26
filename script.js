let sum1 = 0;
let sum2 = 0;
player1 = false
player2 = false
gameStarted = false;
player1finished = false;
player2finished = false;


function start() {
    if (gameStarted == false) {
        player = Math.floor(Math.random() * 2) + 1

        let card1 = Math.floor(Math.random() * 10) + 2
        document.getElementById("newcard1").textContent = "New card: " + card1;
        sum1 += card1
        document.getElementById("p1card").textContent = "Sum: " + sum1;

        let card2 = Math.floor(Math.random() * 10) + 2
        document.getElementById("newcard2").textContent = "New card: " + card2;
        sum2 += card2
        document.getElementById("p2card").textContent = "Sum: " + sum2;

        if (player == 1) {
            player1 = true
            document.getElementById("turn1").textContent = "Your Turn"

        }
        else if (player == 2) {
            player2 = true
            document.getElementById("turn2").textContent = "Your Turn"

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
            document.getElementById("msg1").textContent = ""
            document.getElementById("msg2").textContent = ""
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
        }
    }
    if (sum1 > 21) {
        player1finished = true
        document.getElementById("msg1").textContent = "You're out"
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
        }
    }
    if (sum2 > 21) {
        player2finished = true
        document.getElementById("msg2").textContent = "You're out"
    }
}

function stop1() {
    player1finished = true

    if (player2finished == false) {
        document.getElementById("turn1").textContent = ""
        document.getElementById("turn2").textContent = "Your Turn"
    }

    if (player1finished == true && player2finished == true) {
        if (sum1 > sum2) {
            alert("Player 1 Wins");
        }
        if (sum1 == sum2) {
            alert("The game ended with a draw")
        }
        else {
            alert("Player 2 Wins");
        }
    }

}

function stop2() {
    player2finished = true

    if (player1finished == false) {
        document.getElementById("turn1").textContent = "Your Turn"
        document.getElementById("turn2").textContent = ""
    }

    if (player1finished == true && player2finished == true) {
        if (sum1 > sum2) {
            alert("Player 1 Wins");
        }
        if (sum1 == sum2) {
            alert("The game ended with a draw")
        }
        else {
            alert("Player 2 Wins");
        }
    }

}