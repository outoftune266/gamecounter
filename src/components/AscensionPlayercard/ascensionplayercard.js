import React, { useContext } from "react";
import { AscensionContext } from "../../utils/AscensionStore";

// function AscensionPlayercard({ player, changeName, updateScore }) {
//   return (
//     <nav class="navbar navbar-light bg-light">
//       <div class="container-fluid">
//         <span id={player.id} class="navbar-brand mb-0 h1" onClick={changeName}>
//           {player.name}
//         </span>
//         <button
//           id={player.id}
//           type="button"
//           class="btn btn-primary"
//           onClick={updateScore}
//         >
//           Honor: <span>{player.honor}</span>
//         </button>
//       </div>
//       <div class="container-fluid"></div>
//     </nav>
//   );
// }

function AscensionPlayercard({ updateScore, players }) {
  const { ascensionState } = useContext(AscensionContext);
  console.log(players);
  return (
    <div>
      {ascensionState.players.map((player) => (
        <nav class="navbar navbar-light bg-light" key={player.id}>
          <div class="container-fluid">
            <span id={player.id} class="navbar-brand mb-0 h1">
              {player.name}
            </span>
            <button
              id={player.id}
              type="button"
              class="btn btn-primary"
              onClick={updateScore}
            >
              Honor: <span>{player.score}</span>
            </button>
          </div>
          <div class="container-fluid"></div>
        </nav>
      ))}
    </div>
  );
}

export default AscensionPlayercard;
