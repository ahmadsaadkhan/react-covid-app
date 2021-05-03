import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';

function App() {

const [covid_data, setCovid_data] = useState();

const getData=()=>{
  fetch('http://corona-api.com/countries')
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      setCovid_data(myJson)
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
