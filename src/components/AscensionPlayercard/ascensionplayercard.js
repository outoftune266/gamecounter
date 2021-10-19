import React from "react";

function AscensionPlayercard({ player, changeName, updateScore }) {
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
          onClick={updateScore}
        >
          Honor: <span>{player.honor}</span>
        </button>
      </div>
      <div class="container-fluid"></div>
    </nav>
  );
}

export default AscensionPlayercard;
