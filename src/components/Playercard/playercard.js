import React from "react";

function Playercard({ player, changeName, advancePhase, updateScore }) {
  let playerName = "New Player";
  let phase = 1;
  let score = 0;

  //   function changeName() {
  //     playerName = prompt("What is this player's name?");
  //     if (playerName !== "") {
  //       document.getElementById("currentPlayerName").innerHTML = playerName;
  //     }
  //   }
  //   function advancePhase() {
  //     phase += 1;
  //     document.getElementById("currentPhase").innerHTML = phase;
  //   }

  //   function updateScore() {
  //     let points = Number(
  //       prompt("How many points are you adding to " + playerName + "'s score?")
  //     );
  //     score += points;
  //     document.getElementById("currentScore").innerHTML = score;
  //   }

  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span id={player.id} class="navbar-brand mb-0 h1" onClick={changeName}>
          {player.name}
        </span>
        <button
          id={player.id}
          type="button"
          class="btn btn-primary"
          onClick={advancePhase}
        >
          Phase <span>{player.phase}</span>
        </button>
        <button
          id={player.id}
          type="button"
          class="btn btn-primary"
          onClick={updateScore}
        >
          Score: <span>{player.score}</span>
        </button>
      </div>
      <div class="container-fluid"></div>
    </nav>
  );
}

export default Playercard;
