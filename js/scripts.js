// Business Logic for Game
function Game() {
  this.players = [];
}

Game.prototype.addPlayer = function () {
  this.players.push(player);
};




// Business Logic for Player
function Player(playerName, tempTotal, permTotal) {
  this.playerName = playerName,
  this.tempTotal = 0,
  this.permTotal = 0;
}

Player.prototype.roll = function () {
  if (permTotal>=100) {
    alert("Winner!")
  } else {
    var rand = 1 + Math.floor(Math.random() * 6);


    }

  };

Player.prototype.hold = function() {

};

// Player.prototype.





// UI Logic
var game = new Game();


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
    // $("#player1temp").append("eva");
    // $("#player2temp").append("pete")
console.log(newPlayer1,newPlayer2);
  });
  $("button#roll").click(function(){
    var rand = 1 + Math.floor(Math.random() * 6)
    var tempTotal = 0
    var total = rand + tempTotal
    $("li#player2temp").append(total);
    console.log(rand);
  })
});
