var suits = ["dummy","Spade","Hearts","Clubs","Diamonds"];
var numbers = ["dummy","Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];


function Card(s,n)
{
    var suit = s;
    var number = n;

    this.getNumber = function()
    {
        return number;
    };

    this.getSuit = function()
    {
        return suit;
    };

    this.getValue = function()
    {
        if(number === 1)    return 11;
        if(number === 11 || number === 12 || number === 13 )
            return 10;
        return number;
    };
}

function Deck() {

    var array = [];

    for (var i = 1; i < suits.length; i++) {
        for (var j = 1; j < numbers.length; j++) {
            array.push(new Card(i, j));
        }
    }
}