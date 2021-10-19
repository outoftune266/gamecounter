import React, { useState, useContext } from "react";
import Footer from "../../components/Footer/footer";
import AscensionPlayercard from "../../components/AscensionPlayercard/ascensionplayercard";
import { AscensionContext } from "../../utils/AscensionStore";

import Playercard from "../../components/Playercard/playercard";

function AscensionGame() {
  const [playerCount, setPlayerCount] = useState(1);
  const [players, setPlayers] = useState([]);
  const [playerList, setPlayerList] = useState();
  const [remainingHonor, setRemainingHonor] = useState(0);

  const { ascensionState, setAscensionState } = useContext(AscensionContext);

  function updateStates(playerlist, points) {
    console.log(points);
    if (points) {
      console.log(remainingHonor);
      let honor = remainingHonor - points;
      console.log(honor);
      //setRemainingHonor(remainingHonor - points);
    }
    let transformedList = playerlist.map((player) => (
      <AscensionPlayercard
        player={player}
        changeName={changeName}
        updateScore={updateScore}
      />
    ));
    setPlayerList(transformedList);
    setPlayers(playerlist);
  }

  function updateScore(target) {
    let playerID = target.target.id;
    let playerlist = players;
    let points;
    for (let i = 0; i < playerlist.length; i++) {
      if (playerlist[i].id == playerID) {
        points = Number(
          prompt(
            `How many honor do you want to add to ${playerlist[i].name}'s score?`
          )
        );
        updateScore2(playerID, playerlist, points);
        break;
      }
    }
  }

  function updateScore2(playerID, playerlist, points) {
    for (let i = 0; i < playerlist.length; i++) {
      if (playerlist[i].id == playerID) {
        playerlist[i].honor += points;
        updateStates(playerlist, points);
        break;
      }
    }
  }

  function changeName(target) {
    console.log(target.target.id);
    let playerlist = players;
    let playerID = target.target.id;
    let playerName = prompt("What is this player's name");
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

  // function addPlayer() {
  //   if (playerCount == 5) {
  //     alert("4 is the maximum number of players for this game");
  //   } else {
  //     setRemainingHonor(remainingHonor + 30);
  //     setPlayerCount(playerCount + 1);
  //     console.log(playerCount);
  //     console.log(remainingHonor);
  //     let playerlist = players;

  //     playerlist.push({
  //       id: playerCount,
  //       name: "Player " + playerCount,
  //       honor: 0,
  //     });
  //     updateStates(playerlist);
  //   }
  // }

  function addPlayer() {
    if (ascensionState.players.length == 4) {
      alert("4 is the maximum number of players for this game");
    } else {
      let playerlist = ascensionState.players;

      playerlist.push({
        id: playerlist.length + 1,
        name: "Player " + (playerlist.length + 1),
        score: 0,
      });

      setAscensionState({
        honor: ascensionState.honor + 30,
        players: playerlist,
      });
    }
  }

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">
            Ascension: Chronicle of the Godslayer
          </span>

          <button type="button" class="btn btn-success" onClick={addPlayer}>
            + Player
          </button>
        </div>
      </nav>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">
            Remaining Honor Pool: {ascensionState.honor}
          </span>
        </div>
      </nav>
      {/* {playerList} */}
      <AscensionPlayercard />
      <Footer />
    </div>
  );
}

export default AscensionGame;
