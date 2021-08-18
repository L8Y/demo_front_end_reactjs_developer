import SignUp from "./signUp";
import Login from "./login";
import Home from "./home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import fire from "./fire";

// function App() {
//   return (
{
  /* <Router>
  <div>
    <Switch>
      <Route exact path="/">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  </div>
</Router>; */
}
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.user ? (
          <Home />
        ) : (
          <Router>
            <div>
              <Switch>
                <Route exact path="/">
                  <SignUp />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
              </Switch>
            </div>
          </Router>
        )}
      </div>
    );
  }
}

export default App;
