import React, { useState } from "react";
import Playercard from "../../components/Playercard/playercard";
import Munchkinplayercard from "../../components/MunchkinPlayercard/munchkinplayercard";
import Footer from "../../components/Footer/footer";

function MunchkinGame() {
  const [playerCount, setPlayerCount] = useState(1);
  const [players, setPlayers] = useState([]);
  const [playerList, setPlayerList] = useState();

  function updateStates(playerlist) {
    let transformedList = playerlist.map((player) => (
      <Munchkinplayercard
        player={player}
        changeName={changeName}
        levelUp={levelUp}
        levelDown={levelDown}
      />
    ));
    setPlayerList(transformedList);
    console.log(playerlist);
    setPlayers(playerlist);
    console.log(players);
  }

  function changeName(target) {
    console.log(target.target.id);
    let playerlist = players;
    let playerID = target.target.id;
    let playerName = prompt("What is this player's name?");
    if (playerName != null && playerName != "") {
      for (let i = 0; i < players.length; i++) {
        if (playerlist[i].id == playerID) {
          playerlist[i].name = playerName;
          updateStates(playerlist);
          break;
        }
      }
    } else {
      alert("You didn't enter a valid name. Try again");
    }
  }

  function levelUp(target) {
    console.log(target.target.id);
    let playerID = target.target.id;
    let playerlist = players;
    for (let i = 0; i < players.length; i++) {
      if (playerlist[i].id == playerID) {
        playerlist[i].level += 1;
        updateStates(playerlist);
        break;
      }
    }
  }

  function levelDown(target) {
    console.log(target.target.id);
    let playerID = target.target.id;
    let playerlist = players;
    for (let i = 0; i < players.length; i++) {
      if (playerlist[i].id == playerID) {
        playerlist[i].level -= 1;
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
      level: 1,
    });
    updateStates(playerlist);
  }

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Munchkin</span>
          <button type="button" class="btn btn-success" onClick={addPlayer}>
            + Players
          </button>
        </div>
      </nav>
      {playerList}

      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Instructions
          </button>
        </div>
      </nav>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Instructions
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {" "}
              Start by adding Players. Press Player's name to Edit.
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MunchkinGame;
