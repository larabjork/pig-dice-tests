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
    console.log(this);
    console.log('roll: ', roll);
    console.log(typeof this.tempTotal);
    if (roll === 1) {
      // end round
    } else {
      // this.tempTotal += roll;
      this.tempTotal = this.tempTotal + roll;
      this.newProperty = true;
      console.log('temp total: ', this.tempTotal, roll, this.tempTotal +roll);
    }
    }
  //
  // };

Player.prototype.hold = function() {

};

// Player.prototype.





// UI Logic
var game = new Game();


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
    $("#player1temp").append('<li>' + newPlayer1.tempTotal + '</li>');
  })
  $("button#roll2").click(function(){
    newPlayer2.rollDice();
    $("#player1temp").append('<li>' + newPlayer2.tempTotal + '</li>');
  })
  $("button#hold2").click(function(){
    newPlayer2.hold();
    $("#player1temp").append('<li>' + newPlayer2.tempTotal + '</li>');
  })
});
