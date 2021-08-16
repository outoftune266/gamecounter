import React from "react";

function Gamelisting() {
  function newGame() {
    alert("Start New Game");
  }
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Phase 10: 2-6 players</span>
          <button type="button" class="btn btn-success" onClick={newGame}>
            Start New Game
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Gamelisting;
