import React from "react";
import India from "./India";
//import { fetchIndia } from "../api/ApiService";
import StatePicker from "../components/StatePicker";
import {fetchOneState} from "../api/ApiService"

class IndiaPage extends React.Component {
  state = {
    data: {},
    state: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchOneState();
   // console.log(fetchedData);
    this.setState({ data: fetchedData });
    
  }

  handleStateChange = async (state) => {
   // const fetchedData = await fetchIndia(state);
    const fetchedSData = await fetchOneState(state);
    //console.log(fetchedSData);
    this.setState({ data: fetchedSData, state: state });
  };

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <India data={data} />
        <StatePicker handleStateChange={this.handleStateChange} />
      </React.Fragment>
    );
  }
}

export default IndiaPage;
