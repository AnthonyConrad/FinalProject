var ace = 1;
var two = 2;
var three = 3;
var four =4;
var five = 5;
var six =6;
var seven =7;
var eight = 8;
var nine = 9;
var ten = 10;
var jack = 11;
var queen = 12;
var king = 13;
var spade = 14;
var heart = 15;
var clubs = 16;
var diamond = 17;
var playerCardOne;
var playerCardTwo;
var playerCardThree;
var playerCardFour;
var dealerCardOne;
var dealerCardTwo;
var dealerCardThree;
var dealerCardFour;
var max = 15000;

function money(){
    var moneys = document.getElementById("txtMoney").value;
    if (moneys < max){
        moneys == "15000";
    }
    document.getElementById("x").innerHTML = "$" + moneys;
}

function RandomInt(low, high)
{
    return Math.floor(Math.random()*(high - low + 1)) + low;
}

function playGame(){
    playerCardOne = RandomInt(1,13);
    playerCardTwo = RandomInt(14, 17);
    dealerCardOne = RandomInt(1,13);
    dealerCardTwo = RandomInt(14,17);
    playerCardThree = RandomInt(1,13);
    playerCardFour = RandomInt(14,17);
    dealerCardThree = RandomInt(1,13);
    dealerCardFour = RandomInt(14,17);

    if (playerCardOne === dealerCardOne) {
        playGame();
    }else if (playerCardOne === dealerCardThree) {
        playGame();
    }else if (playerCardThree === dealerCardThree) {
        playGame();
    }else if     (playerCardThree === dealerCardOne) {
        playGame();
    }
}












