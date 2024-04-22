let countUsr = 0;
let countComp = 0;
let totalRound = 0;
let currectStage = 0;
function Fun1() {
  currectStage++;
  document.getElementById("your_turn").innerHTML = "Stone";
  let randomnumber1 = Math.random() * 3;
  if (randomnumber1 > 0 && randomnumber1 <= 1) {
    let computerChoice = "stone";
    document.getElementById("computer_turn").innerHTML = "Stone";
    document.getElementById("res").innerHTML = "Draw";
  } else if (randomnumber1 > 1 && randomnumber1 <= 2) {
    let computerChoice = "paper";
    document.getElementById("computer_turn").innerHTML = "Paper";
    document.getElementById("res").innerHTML = "Computer won this turn";
    countComp++;
  } else {
    let computerChoice = "sissor";
    document.getElementById("computer_turn").innerHTML = "Sissor";
    document.getElementById("res").innerHTML = "You won this turn";
    countUsr++;
  }
  updates();
  if (currectStage == totalRound) {
    fun5();
  }
}
function Fun2() {
  currectStage++;
  document.getElementById("your_turn").innerHTML = "Paper";
  let randomnumber2 = Math.random() * 3;
  if (randomnumber2 > 0 && randomnumber2 <= 1) {
    let computerChoice = "stone";
    document.getElementById("computer_turn").innerHTML = "Stone";
    document.getElementById("res").innerHTML = "You won this turn";
    countUsr++;
  } else if (randomnumber2 > 1 && randomnumber2 <= 2) {
    let computerChoice = "paper";
    document.getElementById("computer_turn").innerHTML = "Paper";
    document.getElementById("res").innerHTML = "Draw";
  } else {
    let computerChoice = "sissor";
    document.getElementById("computer_turn").innerHTML = "Sissor";
    document.getElementById("res").innerHTML = "Computer won this turn";
    countComp++;
  }
  updates();
  if (currectStage == totalRound) {
    fun5();
  }
}
function Fun3() {
  currectStage++;
  document.getElementById("your_turn").innerHTML = "Sissor";
  let randomnumber3 = Math.random() * 3;
  if (randomnumber3 > 0 && randomnumber3 <= 1) {
    let computerChoice = "stone";
    document.getElementById("computer_turn").innerHTML = "Stone";
    document.getElementById("res").innerHTML = "Computer won this turn";
    countComp++;
  } else if (randomnumber3 > 1 && randomnumber3 <= 2) {
    let computerChoice = "paper";
    document.getElementById("computer_turn").innerHTML = "Paper";
    document.getElementById("res").innerHTML = "You won this turn";
    countUsr++;
  } else {
    let computerChoice = "sissor";
    document.getElementById("computer_turn").innerHTML = "Sissor";
    document.getElementById("res").innerHTML = "Draw";
  }
  updates();
  if (currectStage == totalRound) {
    fun5();
  }
}
function updates() {
  document.getElementById("your_score").innerHTML = `${countUsr}`;
  document.getElementById("Comp_score").innerHTML = `${countComp}`;
}
function main_gamePage() {
  totalRound = document.getElementById("takeInput").value;
  let name = document.getElementById("nme").value;
  if (totalRound <= 0 || totalRound == null) {
    alert("Should be in positive value!");
    location.reload();
  } else {
    console.log(totalRound, name);

    document.body.innerHTML = `<div class="main_container">
    <h1 class="heading">Wellcome ${MakeUserName(name)} to S-P-S Game </h1>
    <br />
    <div class="score_board">
      <table>
        <tr>
          <th>Your Score</th>
          <th>Computer Score</th>
        </tr>
        <tr>
          <td><p id="your_score"></p></td>
          <td><p id="Comp_score"></p></td>
        </tr>
        <tr>
          <th>Your Turn</th>
          <th>Computer Turn</th>
        </tr>
        <tr>
          <td><p id="your_turn"></p></td>
          <td><p id="computer_turn"></p></td>
        </tr>
        <tr>
          <th colspan="2">Result</th>
        </tr>
        <tr>
          <td colspan="2"><p id="res"></p></td>
        </tr>
      </table>
    </div>
    <br />

    <br />
    <br />
    <h3 class="turns">Select your turn...</h3>

    <div class="choices_">
      <img src="./assets/rock-turn.webp" class="choices" onclick="Fun1()" />

      <img src="./assets/paper-turn.webp" class="choices" onclick="Fun2()" />

      <img src="./assets/sisor-turn.webp" class="choices" onclick="Fun3()" />
    </div>
    <button onclick="fun5()">End the game.</button>
  </div>`;
  }
}
function fun5() {
  if (countUsr > countComp) {
    document.body.innerHTML = `<div id="results_out" style="background-color: rgb(171, 249, 171)">
      <h1>Congratulations!! You won!!</h1>
      <button onclick="location.reload();">Reload Page</button>`;
  } else if (countComp > countUsr) {
    document.body.innerHTML = `<div id="results_out" style="background-color: red">
      <h1>You Loss!!</h1>
      <button onclick="location.reload();">Reload Page</button>`;
  } else {
    document.body.innerHTML = `<div id="results_out" style="background-color: rgb(244, 217, 222)">
      <h1>Draw match</h1>
      <button onclick="location.reload();">Reload Page</button>`;
  }
}
function MakeUserName(name) {
  const chars = name.split(" ");
  let rndm = Math.round(Math.random() * 10);
  return chars[0][0] + chars[1][0] + "#" + rndm;
}
