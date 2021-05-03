import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [covid_data, setCovid_data] = useState();

  const getData = () => {
    fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "3d33dc1e13mshc5f97558480723fp15e23bjsnc1db1b7183da",
        "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setCovid_data(data);
      })
      .catch(err => {
        console.error(err);
      });


  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <h1>Coronavirus (COVID-19)</h1>
      <p>An ongoing worldwide pandemic of coronavirus disease 2019 (COVID-19), a novel infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2), was first confirmed to have spread to Italy on 31 January 2020, when two Chinese tourists in Rome tested positive for the virus.</p>
      {/* {covid_data.map((data) => (
            <h2>{data.TotalCases}</h2>
      ))} */}
    </div>
  );
}

export default App;
