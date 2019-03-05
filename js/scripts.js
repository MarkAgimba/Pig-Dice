//business logic
var player1="";
var player2="";

var rolldice = function () {
  return Math.floor(6*Math.random())+1;
}

function player(turn) {
  this.roll =0
  this.accumulatingtotal = 0
  this.overalltotal = 0
  this.turn = turn;
  this.playerName;
}

// how to reach 1
Player.prototype.rollone = function () {
  if (this.roll === 1) {
  this.accumulatingtotal = 0;
  alert("Ahhh, " + this.playerName + "well well, you scored 1! Better Luck next turn!")
  // this.switchturn();
  } else {
  this.accumulatingtotal += this.roll;
  }
}

// Hold
Player.prototype.hold= function () {
  this.overalltotal += this.accumulatingtotal;
  this.accumulatingtotal = 0;
  // this.switchturn();
  alert(this.playerName + "Kindly pass the mouse over to next player!");
}

// // switching turn
// Player.prototype.switchturn = function () {
//   if (this.roll ===1) {
//     this.turn = false;
//   } else {
//     this.turn = true;
//   }
//   }
// }
// check for 100
Player.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert(this.playerName + " Congratulations, YOU WON!");
  }
}
Player.prototype.newGame = function () {
  //debugger;
  this.roll = 0;
  this.accumulatingtotal = 0;
  this.overalltotal = 0;
  this.playerName ="";
}

var clearValues = function(){
  $(".player1Name").val("");
  $(".player2Name").val("");
}

//USER INTERFACE LOGIC
$(document).ready(function() {

  $("button#play").click(function(event){
    player1 = new Player(true);
    player2 =  new Player(false);
    $(".player-console").show();
    $(".start-menu").hide();

    var player1Name =$(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName=player1Name;
    player2.playerName=player2Name;

  });
  $("button#new-game").click(function(event){
    $(".player-console").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#accumulating-total-1").empty();
    $("#overall-total-1").empty();
    $("#die-roll-1").empty();
    $("#accumulating-total-2").empty();
    $("#overall-total-2").empty();
    $("#die-roll-2").empty();

    $(".start-menu").show();
