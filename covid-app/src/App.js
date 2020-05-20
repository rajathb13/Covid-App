import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Global from './pages/Global'
import India from './pages/India'
import Info from './pages/Info'



function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path ="/" componenet ={Global} />
          <Route path ="/Gobal" componenet ={Global} />
          <Route path ="/India" componenet ={India} />
          <Route path ="/Info" componenet ={Info} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
