import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Global from "../pages/Global";
import India from "../pages/India";
import Info from "../pages/Info";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Global}></Route>
          <Route exact path="/Global" component={Global}></Route>
          <Route exact path="/Info" component={Info}></Route>
          <Route exact path="/India" component={India}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
