import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/homepage";
import Phase10Game from "./pages/Phase10/phase10";
import AscensionGame from "./pages/Ascension/ascension";

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
            <AscensionGame />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
