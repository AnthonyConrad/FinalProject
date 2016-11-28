
function playGame() {
    var suits = ["hearts", "diamonds", "spades", "clubs"];
    var cards = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
    var dealerCardOne = cards[Math.floor(Math.random() * cards.length)];
    var dealerCardTwo = suits[Math.floor(Math.random() * suits.length)];
    var dealerCardThree = cards[Math.floor(Math.random() * cards.length)];
    var dealerCardFour = suits[Math.floor(Math.random() * suits.length)];
    var playerCardOne = cards[Math.floor(Math.random() * cards.length)];
    var playerCardTwo = suits[Math.floor(Math.random() * suits.length)];
    var playerCardThree = cards[Math.floor(Math.random() * cards.length)];
    var playerCardFour = suits[Math.floor(Math.random() * suits.length)];
    var playerHand = playerCardOne + "of" + playerCardTwo + "and" + playerCardThree + "of" + playerCardFour;
    var dealerHand = dealerCardOne + "of" + dealerCardTwo + "and" + dealerCardThree + "of" + dealerCardFour;
    document.getElementById("playerCards").innerHTML = playerHand;
    document.getElementById("dealersCards").innerHTML = dealerHand;
}
