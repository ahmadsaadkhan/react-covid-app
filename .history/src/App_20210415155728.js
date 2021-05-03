import './App.css';
import {useState} from 'react';

function App() {

const [covid_data, setCovid_data] = useState();

const getData=()=>{
  fetch('https://corona-api.com/countries'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      setCovid_data(myJson)
    });
}


  return (
    <div className="App">
      <h2>Covid Stats App</h2>
    </div>
  );
}

export default App;
