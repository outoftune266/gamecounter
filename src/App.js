import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/homepage";
import Header from "./components/Header/header";
import Phase10 from "./components/Phase10/phase10";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route exact path="/phase10"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
