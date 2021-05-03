import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [Covid_Data, setCovid_Data] = useState(null);

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
        setCovid_Data(data);
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
      <div className="container">

        <div className="jumbotron text-center">
          <h1>Coronavirus (COVID-19)</h1>
          <p>An ongoing worldwide pandemic of coronavirus disease 2019 (COVID-19), a novel infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2), was first confirmed to have spread to Italy on 31 January 2020, when two Chinese tourists in Rome tested positive for the virus.</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-white bg-warning mb-3">
              <div className="card-body">
                <h2 className="card-title"> Total Cases</h2>
                <p className="card-text h3">{Covid_Data && Covid_Data[0].TotalCases}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-danger mb-3">
              <div className="card-body">
                <h2 className="card-title"> Total Cases</h2>
                <p className="card-text h3">{Covid_Data && Covid_Data[0].TotalDeaths}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-success mb-3">
              <div className="card-body">
                <h2 className="card-title"> Total Cases</h2>
                <p className="card-text h3">{Covid_Data && Covid_Data[0].TotalRecovered}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
