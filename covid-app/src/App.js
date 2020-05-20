import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Remedies from "./pages/Remedies";
import Global from "./pages/Global";
import Info from "./pages/Info";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import { fetchData } from "./api/ApiService";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    //console.log(fetchedData);
  }

  render() {
    const data = this.state;
    return (
      <React.Fragment>
        <NavigationBar />
        <div>
          <Jumbotron />
        </div>
        <Global data={data} />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/info" component={Info} />
              <Route exact path="/remedies" component={Remedies} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
