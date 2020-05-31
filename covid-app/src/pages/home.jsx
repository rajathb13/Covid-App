import React from "react";
import Global from "./Global";
import Charts from "../components/Charts";
import CountryPicker from "../components/CountryPicker";
import { fetchData } from "../api/ApiService";

class Home extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    //console.log(fetchedData);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
    console.log(fetchedData);
  };

  render() {
    const { data, country } = this.state;
    return (
      <React.Fragment>
        <Global data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </React.Fragment>
    );
  }
}

export default Home;
