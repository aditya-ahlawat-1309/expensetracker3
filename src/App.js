import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Execution from "./Section-2_5/Vid-52/Execution"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Execution/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
