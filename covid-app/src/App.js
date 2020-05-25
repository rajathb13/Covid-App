import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Info from "./pages/Info";
import Remedies from "./pages/Remedies";
import Home from "./pages/home";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import IndiaPage from './pages/IndiaPage'

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
            <Route path = "/india" component={IndiaPage}/>
            <Route path="/info" component={Info} />
            <Route path="/remedies" component={Remedies} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
