import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';

function App() {

const [covid_data, setCovid_data] = useState();

const getData=()=>{
  // fetch('http://corona-api.com/countries', { mode: 'no-cors', headers: {'Access-Control-Allow-Origin': '*'}})
  // .then(function(response){
  //     console.log(response);
  //     if(response.ok){
  //       return response.json();
  //     }
  // })
  // .then(function(myJson) {
  //     console.log(myJson);
  //     setCovid_data(myJson)
  //   });


  fetch("https://covid-19-data.p.rapidapi.com/report/country/name?date=2020-04-01&name=Italy", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3d33dc1e13mshc5f97558480723fp15e23bjsnc1db1b7183da",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
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
