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
    this.getOutcome = function getOutcome() {
      if ((this.index = players.length)) {
        console.log(this.index + " player end set");
        this.end = true;
      } else this.end = false;
      let val = 1;
      switch (val) {
        case 1:
          if ((this.end = true)) {
            players[0].shot();
          } else players[this.index + 1].shot();
          return "Person to the right drinks.";
        case 2:
          return "Person to the left drinks.";
        case 3:
          return "You take a shot.";
        case 4:
          return "Pour someone a shot.";
        case 5:
          return "You take two shots.";
        case 6:
          return "Everyone takes a shot.";
        default:
          break;
      }
    };
  }
}

//get the output of the die

//add player to list
function addPlayer() {
  let tempName = prompt("Your name?", "DrinkSlayer");
  players.push(new Player(tempName, playerCount));
  players;
  playerCount++;
  refreshList();
}

//remove player
function deletePlayer(number) {
  return 1 + Math.floor(Math.random() * 6);
}
//return num from 1-6
function rollDie() {
  return 1 + Math.floor(Math.random() * 6);
}
//this is what pressing the roll button does
function rollButtonPressed() {
  return turnNumber;
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
function startRound(params) {
  turnNumber = 0;
  for (let index = 0; index < players.length; index++) {
    const element = players[index];
    element.getOutcome();
  }
}
function endGame() {
  while (players.length > 0) {
    players.pop();
  }
  refreshList();
}
//output roll it placeholder for outcome
document.getElementById("outcome").innerHTML = "roll it";
let btn = document.createElement("BUTTON"); // Create a <button> element
btn.innerHTML = "Roll die"; // Insert text
document.body.appendChild(btn);
btn.onclick = function () {
  document.getElementById("outcome").innerHTML = players[
    turnNumber
  ].getOutcome();
  turnNumber++;
  refreshList();
};

let btn2 = document.createElement("BUTTON"); // Create a <button> element
btn2.innerHTML = "Add a player"; // Insert text
document.getElementById("status").innerHTML = "Round number #";
document.body.appendChild(btn2);
btn2.onclick = function () {
  addPlayer();
};

//start game button
let btn3 = document.createElement("BUTTON"); // Create a <button> element
btn3.innerHTML = "Start Game"; // Insert text
document.body.appendChild(btn3);
btn3.onclick = function () {
  startGame();
};

let btn4 = document.createElement("BUTTON"); // Create a <button> element
btn4.innerHTML = "End Game"; // Insert text
document.body.appendChild(btn4);
btn4.onclick = function () {
  endGame();
};
