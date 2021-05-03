import { useState } from 'react';
import useFetch from '../components/useFetch';

const Home = () => {

//    const [country] = useState('world');
    const api_url = "https://corona-api.com/countries";
    const [url, setUrl] = useState(api_url);

    const selectCountry = (e) => {
        const country = e.target.value;
        console.log(country);
        const url_country = 'Pakistan';
        const url_country_short = 'pak';
        const new_url = `${api_url}/country-report-iso-based/${url_country}/${url_country_short}`;
        setUrl(new_url);
    }

    const { data: Covid_Data, isPending, isError } = useFetch('https://restcountries.eu/rest/v2/all');
    const [Countries_Data, setCountriesData] = useState(() => {
        fetch('https://corona-api.com/countries"')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
         //   console.log(data);
            setCountriesData(data);
        })
    });
  //  console.log(Covid_Data);
    return (
        <div className="content">
            <select onChange={selectCountry}>
                {Covid_Data && Countries_Data.map((c) => (
                    <option value={c.name}>{c.name}</option>
                ))}
            </select>
        </div>
        );
}

export default Home;