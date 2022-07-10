import React from "react";
import { Link } from "react-router-dom";

function Gamelisting() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Phase 10: 2-6 players</span>
          <Link to="/phase10">
            <button type="button" class="btn btn-success">
              Play!
            </button>
          </Link>
        </div>
      </nav>
      {/* <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Ascnension: 2-4 players</span>
          <Link to="/ascension">
            <button type="button" class="btn btn-success">
              Play!
            </button>
          </Link>
        </div>
      </nav> */}
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Munchkin: 3-6 players</span>
          <Link to="/munchkin">
            <button type="button" class="btn btn-success">
              Play!
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Gamelisting;
