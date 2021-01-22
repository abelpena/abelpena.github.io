//drunk dice

/*
    1 - person to right
    2 = person to left drink
    3 = you take a shot
    4 - pour someone shot
    5 - you take 2 shots
    6 - everyone take shot
*/

function getOutcome() {
  let val = rollDie();
  switch (val) {
    case 1:
      return "Person to the right drinks.";
      break;
    case 2:
      return "Person to the left drinks.";
      break;
    case 3:
      return "You take a shot.";
      break;
    case 4:
      return "Pour someone a shot.";
      break;
    case 5:
      return "You take two shots.";
      break;
    case 6:
      return "Everyone takes a shot.";
      break;
    default:
      break;
  }
}
function rollDie() {
  return 1 + Math.floor(Math.random() * 6);
}
document.getElementById("outcome").innerHTML = "roll it";
let btn = document.createElement("BUTTON"); // Create a <button> element
btn.innerHTML = "Roll die"; // Insert text
document.body.appendChild(btn);
btn.onclick = function () {
  document.getElementById("outcome").innerHTML = getOutcome();
};
