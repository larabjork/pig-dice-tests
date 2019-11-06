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
  // var player = new Player('Ricki');

  $("form#playerInfo").submit(function(event){

    event.preventDefault();


    var player1NameInput = $("input#player1").val();
    var player2NameInput = $("input#player2").val();
    var newPlayer1 = new Player(player1NameInput);
    var newPlayer2 = new Player(player2NameInput);
    // console.log(newPlayer1);
    $("#intro").hide();
    $("#game").show();


    $("#player1Val").text(player1NameInput);
    $("#player2Val").text(player2NameInput);
    console.log(newPlayer1);
  });
  $("button#roll").click(function(){
    // var rand = 1 + Math.floor(Math.random() * 6)
    // var tempTotal = rand
    // var total = rand + tempTotal
//     player.roll();
// console.log(player.roll());
    player.rollDice();
    $("#player2temp").append('<li>' + player.tempTotal + '</li>');
  })
});
