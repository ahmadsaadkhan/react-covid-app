import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';

function App() {

const [covid_data, setCovid_data] = useState();

const getData=()=>{
  fetch('http://corona-api.com/countries', { mode: 'no-cors', headers: {'Access-Control-Allow-Origin': '*'}})
  .then(function(response){
      console.log(response);
      if(response.ok){
        return response.json();
      }
  })
  .then(function(myJson) {
      console.log(myJson);
      setCovid_data(myJson)
    });
}


// axios.get(`https://cors-anywhere.herokuapp.com/[YOUR_API_URL]`,{headers: {'Access-Control-Allow-Origin': '*'}})
//       .then(response => console.log(response:data);
//   }

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
