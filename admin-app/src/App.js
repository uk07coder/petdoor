import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/home";
import Signin from "./containers/signin";
import Signup from "./containers/signup";
import Adpost from "./containers/Adpost";
import PrivateRoute from "./components/HOC/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={Adpost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
