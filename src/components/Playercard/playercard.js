import React from "react";

function Playercard() {
  let phase = 1;
  let score = 0;

  function advancePhase() {
    phase += 1;
    document.getElementById("currentPhase").innerHTML = phase;
  }

  function updateScore() {
    let points = Number(prompt("How many points are you adding?"));
    score += points;
    document.getElementById("currentScore").innerHTML = score;
  }

  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Player 1</span>
        <button type="button" class="btn btn-primary" onClick={advancePhase}>
          Phase <span id="currentPhase">1</span>
        </button>
        <button type="button" class="btn btn-primary" onClick={updateScore}>
          Score: <span id="currentScore">0</span>
        </button>
      </div>
      <div class="container-fluid"></div>
    </nav>
  );
}

export default Playercard;
