import { Game, Player } from './../src/pig-dice.js';
describe ('Game', () =>{
  test('should create an array of 2 objects', () =>{
    var newGame = new Game("Mabel", "Fred");
    expect(newGame).toBe(["Mabel", "Fred"]);
  });
});
describe('Player', () =>{
  test('should correctly create a player object', () =>{
    var player = new Player("Mabel",0,0);
    expect(player.playerName).toEqual("Mabel");
    expect(player.permTotal).toEqual(0);
    expect(player.tempTotal).toEqual(0);
  });
    describe('#hold', () =>{
      test('should add tempTotal to permTotal', ()=>{
        var temp = 5;
        var perm = 2;
        var newPerm = temp + perm;
        expect(newPerm).toEqual(7);
      });
    });
    describe('#rollDice', () =>{
      test('should correctly roll a number 1-6', () =>{
        var roll = 3;
        var roll2 =10;
        expect(roll).toBeGreaterThanOrEqual(1);
        expect(roll).toBeLessThanOrEqual(6);
        expect(roll2).not.toBeLessThanOrEqual(6);
      });
      expect.extend({
        toBe(roll){
          const pass = (roll !==1);
          if (pass) {
            return {
              message: () => (
                'expected ${roll} to not be 1'
              ),
              pass: true,
            };
          } else {
            return {
              message: () => ('expected ${roll} to be 1'),
              pass: false,
            };
          };
        },
      });//closes expect.extend
      test('should separate roll of 1 versus all other numbers', () => {
        expect(2).not.toBe(1);
        expect(2).toBe(2||3||4||5||6);
      });
    });
  });



// describe('Player', () =>{
//     test('should update tempTotal with each roll', () =>{
//       var roll = new Player("Mabel");
//       roll.tempTotal = 5;
//       expect(roll.tempTotal).toEqual(5);
//     });
//   });
