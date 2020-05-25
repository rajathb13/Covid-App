import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./StatePicker.module.css";
import { fetchIndia} from '../api/ApiService'


const StatePicker = ({handleStateChange}) => {

    const [fetchedStates, setFetchedStates] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setFetchedStates(await fetchIndia())
        }
        fetchAPI();
    },[setFetchedStates]);

   // console.log(fetchedCountries)

  return (
      <div className={styles.formControl}>
    <FormControl >
      <NativeSelect defaultValue = '' onChange={(e) => handleStateChange(e.target.value)}>
        <option value="">Choose a state</option>
      {fetchedStates.map((state,i) => <option key = {i} value={state}>{state}</option>)}
      </NativeSelect>
    </FormControl>
    </div>
  );
};

export default StatePicker;
