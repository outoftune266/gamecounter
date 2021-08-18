import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/homepage";
import Phase10Game from "./pages/Phase10/phase10";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route exact path="/phase10">
            <Phase10Game></Phase10Game>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
