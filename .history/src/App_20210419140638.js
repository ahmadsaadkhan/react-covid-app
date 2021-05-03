import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';

function App() {

const [covid_data, setCovid_data] = useState();

// const getData=()=>{
//   fetch('http://corona-api.com/countries', { mode: 'no-cors', headers: {'Access-Control-Allow-Origin': '*'}})
//   .then(function(response){
//       console.log(response);
//       if(response.ok){
//         return response.json();
//       }
//   })
//   .then(function(myJson) {
//       console.log(myJson);
//       setCovid_data(myJson)
//     });
// }

const getData = () => {
axios.get(`http://corona-api.com/countries`,{headers: {'Access-Control-Allow-Origin': '*'}})
      .then(response => console.log(response));
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
