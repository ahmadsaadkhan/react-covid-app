import { useState } from 'react';
import useFetch from '../components/useFetch';

const Home = () => {

    const [country] = useState('');
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

    const { data: Countries_Data, isPending, isError } = useFetch('https://restcountries.eu/rest/v2/all');
    const [Covid_Data, setCovid_Data] = useState(() => {
        fetch('https://corona-api.com/countries')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCovid_Data(data.data);
            })
    });
    return (
        <div className="container">
            <div className="jumbotron text-center">
                <h1>Coronavirus (COVID-19){country}</h1>
                <p>An ongoing worldwide pandemic of coronavirus disease 2019 (COVID-19), a novel infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2), was first confirmed to have spread to Italy on 31 January 2020, when two Chinese tourists in Rome tested positive for the virus.</p>
            </div>

            <h1>{Covid_Data && Covid_Data[0].Country} Covid Data</h1>
            <select onChange={selectCountry}>
                {Countries_Data && Countries_Data.map((c) => (
                    <option value={c.name}>{c.name}</option>
                ))}
            </select>
            {country}
            {isError && <p>{isError}</p>}
            {isPending && <h2>loading...</h2>}

            {Covid_Data && Covid_Data.map((c) => (
                c.name === country ? (
                <div className="col-md-3">
                    <div className="card text-white bg-warning mb-3">
                        <div className="card-body">
                            <h2 className="card-title"> Total Cases</h2>
                            <p className="card-text h3">{c.name}</p>
                        </div>
                    </div>
                </div>
                ) : ''
            ))}
        </div>

    );
}

export default Home;