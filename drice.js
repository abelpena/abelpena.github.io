//drunk dice

/*
    1 - person to right
    2 = person to left drink
    3 = you take a shot
    4 - pour someone shot
    5 - you take 2 shots
    6 - everyone take shot
*/
let players = [];
let playerCount = 0;
let roundNumber = 0;
let gameActive = false;
let turnNumber = 0;
//define a player
class Player {
  constructor(name, idx) {
    this.index = idx;
    this.name = name;
    this.shots = 0;

    this.drinks = 0;
    this.getName = function () {
      alert(this.name);
    };
    //add a shot to the players list
    this.shot = function () {
      this.shots++;
    };

    this.end = function () {
      this.end++;
    };
  }
}

//output roll it placeholder for outcome
document.getElementById("outcome").innerHTML = "roll it";

//function when addplayer clicked
function addPlayer() {
  let tempName = prompt("Your name?", "DrinkSlayer");
  players.push(new Player(tempName, playerCount));
  players;
  playerCount++;
  refreshList();
}

function rollDie() {
  if (gameActive == false) {
    alert("Please start the game before you roll the die.");
  } else {
    getOutcome(display);

    turnNumber++;
  }
  if (turnNumber > playerCount) {
    startRound();
  }
}
function display(text) {
  document.getElementById("outcome").innerHTML = text;
}
function getNum() {
  return 1 + Math.floor(Math.random() * 6);
}

function getOutcome(myCallback) {
  let val = getNum();
  console.log(val);
  switch (val) {
    case 1:
      if (turnNumber == playerCount - 1) {
        players[0].shot();
      } else players[turnNumber + 1].shot();
      myCallback("Person to the right drinks.");
      break;
    case 2:
      if (turnNumber == 0) {
        players[playerCount - 1].shot();
      } else players[turnNumber - 1].shot();
      myCallback("Person to the left drinks.");
      break;
    case 3:
      players[turnNumber].shot();
      myCallback("You take a shot.");
      break;
    case 4:
      let tempNum = prompt("Who gets a shot? Enter number of player", "1");
      myCallback("Pour someone a shot.");
      players[parseInt(tempNum)].shots;
      break;
    case 5:
      players[turnNumber].shot();
      players[turnNumber].shot();
      myCallback("You take two shots.");
      break;
    case 6:
      for (let index = 0; index < playerCount; index++) {
        players[index].shot();
      }
      myCallback("Everyone takes a shot.");
    default:
      break;
  }
  refreshList();
}

function refreshList() {
  document.getElementById("list").innerHTML = "";
  for (var i = 0; i < players.length; i++) {
    // parsing with array.length
    document.getElementById("list").innerHTML +=
      i +
      1 +
      ": " +
      players[i].name +
      "    Shots: " +
      players[i].shots +
      "    Drinks: " +
      players[i].drinks +
      "    Index: " +
      players[i].index +
      "<br>";
  }
  playerAdded = false;
}

function startGame() {
  if (players.length < 3) {
    alert("Must add 3 players before game can start.");
    return;
  }
  if (gameActive == true) console.log("Game already active.");
  else {
    console.log("Game started.");
    gameActive = true;
    document.getElementById("status").innerHTML = "Game Started...";
    roundNumber++;
    document.getElementById("status").innerHTML = "Round Number " + roundNumber;
  }
}
//function that will run while a round is in progress
function startRound() {
  turnNumber = 0;
  roundNumber++;
  document.getElementById("status").innerHTML = "Round Number " + roundNumber;
}
function endGame() {
  while (players.length > 0) {
    players.pop();
  }
  gameActive = false;
  refreshList();
}

while (gameActive == true) {
  while (turnNumber < playerCount - 1) {
    btn.onclick = function () {
      console.log(getOutcome(turnNumber));
      turnNumber++;
      refreshList();
    };
  }
  turnNumber = 0;
  roundNumber++;
}
