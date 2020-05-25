import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const url2 = "http://covid19-india-adhikansh.herokuapp.com/states";

export const fetchData = async (country) => {
  let changableURL = url;

  if (country) {
    changableURL = `${url}/countries/${country}`;
  }

  try {
    const {data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changableURL);
    //console.log(confirmed, recovered, deaths, lastUpdate )

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {}
};

export const fetchOneState = async() => {
  let num = 0;
  try {
    const {data: {state: {name}}} = await axios.get(url2);
    console.log({data: {state: {name}}})
    return (num);
  } catch (error) {}
};


export const fetchIndia = async () => {
  try {
    const {data:{state}} = await axios.get(url2);
    console.log({data:{state}});
    return state.map((state) => state.name)
    
    
  } catch (error) {}
};
