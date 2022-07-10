import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/homepage";
import Phase10Game from "./pages/Phase10/phase10";
import AscensionGame from "./pages/Ascension/ascension";
import AscensionStore from "./utils/AscensionStore";
import MunchkinGame from "./pages/Munchkin/munchkin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/gamecounter/">
            <Homepage />
          </Route>
          <Route exact path="/phase10/">
            <Phase10Game />
          </Route>
          <Route exact path="/ascension/">
            <AscensionStore>
              <AscensionGame />
            </AscensionStore>
          </Route>
          <Route exact path="/munchkin/">
            <MunchkinGame />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
