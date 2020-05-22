import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries} from '../api/ApiService'


const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI();
    },[setFetchedCountries]);

   // console.log(fetchedCountries)

  return (
      <div className={styles.formControl}>
    <FormControl >
      <NativeSelect defaultValue = '' onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
      {fetchedCountries.map((country,i) => <option key = {i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
    </div>
  );
};

export default CountryPicker;
