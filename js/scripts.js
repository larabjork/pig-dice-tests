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
  this.tempTotal = 0,
  this.permTotal = 0;
}

Player.prototype.roll = function () {

};

Player.prototype.hold = function() {

};

// Player.prototype.





// UI Logic

$(document).ready(function() {
  $("form#playerInfo").submit(function(event){
    event.preventDefault();
    var player1NameInput = $("input#player1").val();
    var player2NameInput = $("input#player2").val();
    $("#intro").hide();
    $("#game").show();

    var newPlayer1 = new Player(player1NameInput);
    var newPlayer2 = new Player(player2NameInput);

    $("#player1Val").text(player1NameInput);
    $("#player2Val").text(player2NameInput);
console.log(newPlayer1,newPlayer2);
  });
});
