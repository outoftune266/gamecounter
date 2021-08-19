import React, { useState } from "react";
import Playercard from "../../components/Playercard/playercard";
import Footer from "../../components/Footer/footer";

function Phase10Game() {
  const [playerCount, setPlayerCount] = useState(1);
  const [players, setPlayers] = useState([]);
  //let playerCount = 0;
  const [playerList, setPlayerList] = useState();

  function updateStates(playerlist) {
    let transformedList = playerlist.map((player) => (
      <Playercard
        player={player}
        changeName={changeName}
        advancePhase={advancePhase}
        updateScore={updateScore}
      />
    ));
    setPlayerList(transformedList);
    console.log(playerlist);
    setPlayers(playerlist);
    console.log(players);
  }

  function changeName(target) {
    console.log(target.target.id);
    let playerID = target.target.id;
    let playerName = prompt("What is this player's name?");
    let playerlist = players;
    for (let i = 0; i < players.length; i++) {
      if (playerlist[i].id == playerID) {
        playerlist[i].name = playerName;
        updateStates(playerlist);
        break;
      }
    }
  }

  function advancePhase(target) {
    console.log(target.target.id);
    let playerID = target.target.id;
    let playerlist = players;
    for (let i = 0; i < players.length; i++) {
      if (playerlist[i].id == playerID) {
        playerlist[i].phase += 1;
        updateStates(playerlist);
        break;
      }
    }
  }

  function updateScore(target) {
    let playerID = target.target.id;
    let playerlist = players;
    let points = Number(prompt("How many points are you adding?"));
    for (let i = 0; i < players.length; i++) {
      if (playerlist[i].id == playerID) {
        playerlist[i].score += points;
        updateStates(playerlist);
        break;
      }
    }
  }

  function addPlayer() {
    setPlayerCount(playerCount + 1);
    console.log(playerCount);
    let playerlist = players;

    playerlist.push({
      id: playerCount,
      name: "Player " + playerCount,
      phase: 1,
      score: 0,
    });

    updateStates(playerlist);
  }

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Phase 10</span>
          <button type="button" class="btn btn-success" onClick={addPlayer}>
            + Players
          </button>
        </div>
      </nav>
      {playerList}
      <Footer></Footer>
    </div>
  );
}

export default Phase10Game;
