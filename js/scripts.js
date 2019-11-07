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
  winnerWinner(this);

  // if (permTotal>=100) {
    //   alert("Winner!")
    // } else {
      var roll = 1 + Math.floor(Math.random() * 6);
      if (this.tempTotal + this.permTotal >= 10){
        // alert("you win")
      } else if (roll !== 1) {
        this.tempTotal = this.tempTotal + roll;
        winnerWinner(this);


      } else {
        switchDisplay();
        winnerWinner(this);

      }
    };

    Player.prototype.hold = function() {
      winnerWinner(this);
      this.permTotal = this.tempTotal + this.permTotal
      this.tempTotal = 0
      switchDisplay();
    };


    // UI Logic
    var game = new Game();

    function switchDisplay() {
      $("#player2deets").toggle();
      $("#player1deets").toggle();
        }
    function winnerWinner(player) {
      if (player.tempTotal + player.permTotal >= 10){
        alert("you win");
          this.tempTotal = 0
        $("#intro").show();
        $("#game").hide();
      }
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
        $("#player1temp").text(newPlayer1.tempTotal);
      })
      $("button#hold1").click(function(){
        newPlayer1.hold();
        $("#player1Total").text(newPlayer1.permTotal);
        // switchTemp();
        // switchDisplay();
      })
      $("button#roll2").click(function(){
        newPlayer2.rollDice();
        // $("#player2temp").empty();
        $("#player2temp").text(newPlayer2.tempTotal);
      })
      $("button#hold2").click(function(){
        newPlayer2.hold();
        $("#player2Total").text(newPlayer2.permTotal);
        // switchTemp();
        // switchDisplay();

      })
    });
