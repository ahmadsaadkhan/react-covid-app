import './App.css';
import { useState } from 'react';
import Home from './components/Home';

function App() {

  // const [Covid_Data, setCovid_Data] = useState(null);

  // const getData = () => {
  //   fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-key": "3d33dc1e13mshc5f97558480723fp15e23bjsnc1db1b7183da",
  //       "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
  //     }
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       setCovid_Data(data);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });


  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
