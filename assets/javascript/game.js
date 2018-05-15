$(document).ready(function() {
    var ranNum= Math.floor(Math.random()*120+10)

$('#randomNumber').text(ranNum);

var morty1= Math.floor(Math.random()*9+1)
var morty2= Math.floor(Math.random()*9+1)
var morty3= Math.floor(Math.random()*9+1)
var morty4= Math.floor(Math.random()*9+1)

var wins=0;
var losses=0;
var userTotal =0;

$('tallyWins').text(wins);
$('tallyLosses').text(losses);
});

function reset() {
    ranNum : Math.floor(Math.random()*120+10);
    console.log(randNum)
    $('randomNumber').text(randNum);
    var morty1= Math.floor(Math.random()*9+1)
    var morty2= Math.floor(Math.random()*9+1)
    var morty3= Math.floor(Math.random()*9+1)
    var morty4= Math.floor(Math.random()*9+1)
    userTotal = 0;
    $('finalTotal').text(userTotal);
}

function winner() {
    alert("Winner Winner Chicken Dinner!");
    wins++;
    $('#wins').text(winner);
    reset();
}

function loser() {
    alert ("Ahh Geez RICK Won!");
    losses++;
    $('#losses').text(loser);
    reset()
}

$('#sad').on ('click',function(){
    totalScore = totalScore + morty1;
    $('finalTotal').text(userTotal);
    if(userTotal == randNum) {
        winner();
    }
    else if (userTotal > randNum) {
        loser();
    }
});

$("#evil").on ('click',function() {
    totalScore = totalScore + morty2;
    $('finalTotal').text(userTotal);
    if (userTotal ==randNum) {
        winner();
    }
    else if (userTotal > randNum) {
        loser();
    }
});



