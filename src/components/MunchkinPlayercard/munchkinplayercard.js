import React from "react";

function Munchkinplayercard({ player, changeName, levelUp, levelDown }) {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span id={player.id} class="navbar-brand mb-0 h1" onClick={changeName}>
          {player.name}
        </span>
        <span>{player.level}</span>
        <button
          id={player.id}
          type="button"
          class="btn btn-primary"
          onClick={levelUp}
        >
          Lvl +
        </button>
        <button
          id={player.id}
          type="button"
          class="btn btn-primary"
          onClick={levelDown}
        >
          Lvl -
        </button>
      </div>
      <div class="container-fluid"></div>
    </nav>
  );
}

export default Munchkinplayercard;
