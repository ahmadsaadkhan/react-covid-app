import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';

function App() {

const [covid_data, setCovid_data] = useState();

const getData=()=>{
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
.then(data =>{
  console.log(data);
})
.catch(err => {
	console.error(err);
});


}

useEffect(()=>{
  getData()
},[])

  return (
    <div className="App">
      <h2>Covid Stats App</h2>
    </div>
  );
}

export default App;
