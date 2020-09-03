import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select } from "@material-ui/core"
import './App.css';

function App() {
  const [countries, setCountries] = useState([
    'USA','UK','India'
  ]);

  useEffect(() => {
  
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries)")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
        {
          name: country.country,
          value: country.countryInfo.iso2
        }
        ));
      })
    }

  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {countries.map(current => (
              <MenuItem value={current}>{current}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
