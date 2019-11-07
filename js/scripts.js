// Business Logic for Game
function Game() {
  this.players = [];
}

Game.prototype.addPlayer = function () {
  this.players.push(player);
};

// Business Logic for Player
function Player(playerName) {
  this.playerName = playerName,
  this.permTotal = 0,
  this.tempTotal = 0;
}

Player.prototype.rollDice = function () {
  // if (permTotal>=100) {
  //   alert("Winner!")
  // } else {
    var roll = 1 + Math.floor(Math.random() * 6);
    if (this.tempTotal + this.permTotal >= 100){
      alert("you win")
    } else if (roll !== 1) {
      this.tempTotal = this.tempTotal + roll;
    } else {
    switchDisplay();
  }
  };

Player.prototype.hold = function() {
  this.permTotal = this.tempTotal + this.permTotal
  this.tempTotal = 0
};

// Player.prototype.





// UI Logic
var game = new Game();

function switchDisplay() {
  $("#player2deets").toggle();
  $("#player1deets").toggle();

}

$(document).ready(function() {
  var newPlayer1 = "ricki";
  var newPlayer2 = "Jamie";

  $("form#playerInfo").submit(function(event){

    event.preventDefault();


    var player1NameInput = $("input#player1").val();
    var player2NameInput = $("input#player2").val();
    newPlayer1 = new Player(player1NameInput);
    newPlayer2 = new Player(player2NameInput);
    // console.log(newPlayer1);
    $("#intro").hide();
    $("#game").show();


    $("#player1Val").text(player1NameInput);
    $("#player2Val").text(player2NameInput);
    console.log(newPlayer1);
  });
  $("button#roll1").click(function(){
    newPlayer1.rollDice();
    $("#player1temp").append('<li>' + newPlayer1.tempTotal + '</li>');
  })
  $("button#hold1").click(function(){
    newPlayer1.hold();
    $("#player1Total").text(newPlayer1.permTotal);
    $("#player1temp").hide();
    $("#player2deets").show();
    $("#player1deets").hide();
    $("#player2temp").show();

  })
  $("button#roll2").click(function(){
    newPlayer2.rollDice();
    $("#player2temp").append('<li>' + newPlayer2.tempTotal + '</li>');
  })
  $("button#hold2").click(function(){
    newPlayer2.hold();
    $("#player2Total").text(newPlayer2.permTotal);
    $("#player2temp").hide();
    $("#player1temp").show();
    $("#player1deets").show();
    $("#player2deets").hide();

  })
});
