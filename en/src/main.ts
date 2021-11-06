let sum1 = 0;
let sum2 = 0;
let card1: number;
let cards1 = [];
let card2: number;
let cards2 = [];
let player1 = false;
let player2 = false;
let gameOn = false;
let gameFinished = true;
let player1finished = false;
let player2finished = false;
let player1wins = 0;
let player2wins = 0;
let rule = false;

function alertclose() {
  document.getElementById("alert-div").style.display = "none";
  document.getElementById("main").style.filter = "blur(0)";
}

function getRandomCardPlayer1() {
  card1 = Math.floor(Math.random() * 10) + 2;
  cards1.push(card1);
  sum1 += card1;
  document.getElementById("newcard1").textContent = "Cards: " + cards1;
  document.getElementById("sum1").textContent = "Sum: " + sum1;
  player1 = false;
}

function getRandomCardPlayer2() {
  card2 = Math.floor(Math.random() * 10) + 2;
  cards2.push(card2);
  sum2 += card2;
  document.getElementById("newcard2").textContent = "Cards: " + cards2;
  document.getElementById("sum2").textContent = "Sum: " + sum2;
  player2 = false;
}

function selectPlayer1() {
  player1 = true;
  document.getElementById("turn1").style.color = "white";
  document.getElementById("turn2").style.color = "transparent";
  document.getElementById("turn1").textContent = "Your turn!";
  document.getElementById("draw1").style.border = "1px solid orange";
  document.getElementById("stop1").style.border = "1px solid orange";
  document.getElementById("draw2").style.border = "1px solid lightgray";
  document.getElementById("stop2").style.border = "1px solid lightgray";
}

function selectPlayer2() {
  player2 = true;
  document.getElementById("turn2").style.color = "white";
  document.getElementById("turn1").style.color = "transparent";
  document.getElementById("turn2").textContent = "Your turn!";
  document.getElementById("draw2").style.border = "1px solid orange";
  document.getElementById("stop2").style.border = "1px solid orange";
  document.getElementById("draw1").style.border = "1px solid lightgray";
  document.getElementById("stop1").style.border = "1px solid lightgray";
}

function start() {
  if (gameOn == false && gameFinished == true) {
    gameOn = true;
    gameFinished = false;

    // Select the player
    let player = Math.floor(Math.random() * 2) + 1;

    // Select the cards
    getRandomCardPlayer1();
    getRandomCardPlayer2();

    if (player == 1) {
      selectPlayer1();
    }
    if (player == 2) {
      selectPlayer2();
    }

    document.getElementById("start").textContent = "Finish";
  } else {
    // Finish Button
    gameOn = false;
    gameFinished = true;
    document.getElementById("start").textContent = "Play";
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
    document.getElementById("newcard1").textContent = "Cards: 0";
    document.getElementById("newcard2").textContent = "Cards: 0";
    document.getElementById("sum1").textContent = "Sum: 0";
    document.getElementById("sum2").textContent = "Sum: 0";

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
  document.getElementById("alert").innerText = "Player 1 won!";
  document.getElementById("main").style.filter = "blur(5px)";
  setTimeout(function () {
    alertclose();
  }, 2000);
}
function player2won() {
  player2wins++;
  document.getElementById("player2-wins").textContent = String(player2wins);
  document.getElementById("draw1").style.border = "1px solid lightgray";
  document.getElementById("stop1").style.border = "1px solid lightgray";
  document.getElementById("draw2").style.border = "1px solid lightgray";
  document.getElementById("stop2").style.border = "1px solid lightgray";
  document.getElementById("alert-div").style.display = "flex";
  document.getElementById("alert").innerText = "Player 2 won!";
  document.getElementById("main").style.filter = "blur(5px)";
  setTimeout(function () {
    alertclose();
  }, 2000);
}

function test() {
  if (sum1 == 21) {
    gameOn = false;
    document.getElementById("turn1").style.color = "transparent";
    document.getElementById("turn2").style.color = "transparent";
    player1won();
  } else if (sum2 == 21) {
    gameOn = false;
    document.getElementById("turn1").style.color = "transparent";
    document.getElementById("turn2").style.color = "transparent";
    player2won();
  } else if (sum1 > 21) {
    gameOn = false;
    player1finished = true;
    document.getElementById("turn2").style.color = "transparent";
    player2won();
  } else if (sum2 > 21) {
    gameOn = false;
    player2finished = true;
    document.getElementById("turn1").style.display = "transparent";
    player1won();
  } else if (player1finished == true && player2finished == true) {
    if (sum1 > sum2) {
      player1won();
    } else if (sum2 > sum1) {
      player2won();
    } else {
      document.getElementById("main").style.filter = "blur(5px)";
      document.getElementById("alert-div").style.display = "flex";
      document.getElementById("alert").innerText = "The game ended with a tie!";
      setTimeout(function () {
        alertclose();
      }, 2000);
    }
  }
}

function draw1() {
  if (
    gameOn == true &&
    player1finished == false &&
    (player2finished == true || player1 == true)
  ) {
    getRandomCardPlayer1();

    if (player2finished == false) {
      selectPlayer2();
    }

    test();
  }
}
function draw2() {
  if (
    gameOn == true &&
    player2finished == false &&
    (player2 == true || player1finished == true)
  ) {
    getRandomCardPlayer2();

    if (player1finished == false) {
      selectPlayer1();
    }

    test();
  }
}

function stop1() {
  if (gameOn == true) {
    player1finished = true;

    if (player2finished == false) {
      selectPlayer2();
    } else {
      test();
    }
  }
}

function stop2() {
  if (gameOn == true) {
    player2finished = true;
    document.getElementById("turn2").textContent = "Stopped";

    if (player1finished == false) {
      selectPlayer1();
    } else {
      test();
    }
  }
}

function rules() {
  if (rule == false) {
    document.getElementById("rules").textContent =
      "When the game starts, both players receive a random card. The first player will be randomly selected. You can draw a new card or stop. You win when the sum equals 21 or your sum is greater after both players stop";
    rule = true;
  } else {
    document.getElementById("rules").textContent = "";
    rule = false;
  }
}
