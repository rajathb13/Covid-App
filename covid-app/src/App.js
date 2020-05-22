import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Remedies from "./pages/Remedies";
import Global from "./pages/Global";
import Info from "./pages/Info";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import { fetchData } from "./api/ApiService";
import Charts from "./components/Charts";
import CountryPicker from "./components/CountryPicker";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    console.log(fetchedData);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
    console.log(fetchedData);
  };

  render() {
    const { data, country } = this.state;
    return (
      <>
        <NavigationBar />
        <Jumbotron />
        <Global data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
        
          <Router>
            <Switch>
              <Route exact path="/info" component={Info} />
              <Route exact path="/remedies" component={Remedies} />
            </Switch>
          </Router>
        
      </>
    );
  }
}

export default App;
