// Business Logic for Game
export function Game() {
  this.players = [];
}

Game.prototype.addPlayer = function () {
  this.players.push(player);
};

// Business Logic for Player
export function Player(playerName) {
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
