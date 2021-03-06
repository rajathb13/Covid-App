import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Remedies from "./pages/Remedies";
import Info from "./pages/Info";
import Home from "./pages/home";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";

class App extends React.Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Jumbotron />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/info" component={Info} />
            <Route path="/remedies" component={Remedies} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
