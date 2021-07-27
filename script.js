let sum = 0
let blackJack = 0
let outTheGame = 0
let already = false // to add the count only one time

// Choose two cards; shows the sum; shows a message depending on the sum; counts the wins and losses;
function start() { 
    document.getElementById("cannot").textContent = ""
    if (sum === 0) {
        let firstCard = Math.floor(Math.random() * 10) + 2; 
        let secondCard = Math.floor(Math.random() * 10) + 2;
        sum = firstCard + secondCard
        if (sum < 21) {
            document.getElementById("inter").textContent = "Do you want to draw a new card? 🙂"
        } else if (sum === 21 && already == false) {
            document.getElementById("inter").textContent = "Whohoo! You've got BlackJack! 🥳"
            blackJack ++
            blacktext = "🥳: " + blackJack
            document.getElementById("black-jack").textContent = blacktext
            already = true
            
        } else if (sum > 21 && already == false) {
            document.getElementById("inter").textContent = "You're out of the game! 😭"
            outTheGame ++
            outText = "😭: " + outTheGame
            document.getElementById("out-the-game").textContent = outText
            already = true
        }
        document.getElementById("number").textContent = sum
        document.getElementById("start").textContent = "Finish"

    } else {
        sum = 0
        document.getElementById("number").textContent = sum
        document.getElementById("start").textContent = "Start"
        document.getElementById("inter").textContent = ""
    }
    already = false
    
 }
 
 // Sum another card; shows a message depending on the sum; counts the wins and losses;
 function draw() {
    if (already == true) {
        document.getElementById("cannot").textContent = "You cannot draw more cards"
    }
     numberEl = document.getElementById("number").textContent
     if (numberEl != 0) {
        if (sum < 21) {
            sum += Math.floor(Math.random() * 10) + 2
            document.getElementById("number").textContent = sum  
        }
        if (sum < 21) {
            document.getElementById("inter").textContent = "Do you want to draw a new card? 🙂" 
        } else if (sum === 21 && already == false) {
            document.getElementById("inter").textContent = "Whohoo! You've got BlackJack! 🥳"
            blackJack ++
            blacktext = "🥳: " + blackJack
            document.getElementById("black-jack").textContent = blacktext
            already = true
            
        } else if (sum > 21 && already == false) {
            document.getElementById("inter").textContent = "You're out of the game! 😭" 
            result = document.getElementById("inter").textContent
            outTheGame ++
            outText = "😭: " + outTheGame
            document.getElementById("out-the-game").textContent = outText
            already = true
        }
    }
 }