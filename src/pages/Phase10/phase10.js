import React, { useState } from "react";
import Playercard from "../../components/Playercard/playercard";
import Footer from "../../components/Footer/footer";

function Phase10Game() {
  const [playerCount, setPlayerCount] = useState(1);
  const [players, setPlayers] = useState([]);
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
    let points;
    for (let i = 0; i < playerlist.length; i++) {
      if (playerlist[i].id == playerID) {
        points = Number(
          prompt(
            `How many points do you want to add to ${playerlist[i].name}'s score?`
          )
        );
        updateScore2(playerID, playerlist, points);
        break;
      }
    }
  }

  function updateScore2(playerID, playerlist, points) {
    // let points = Number(prompt("How many points are you adding?"));
    for (let i = 0; i < playerlist.length; i++) {
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
              Start by adding Players. Press Player's name to Edit. Press Phase
              button to advance. Press Score button to add points. Keep track of
              your score or the whole groups! Have fun!
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

export default Phase10Game;
