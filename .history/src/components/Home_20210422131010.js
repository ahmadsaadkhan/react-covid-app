import { useState, useEffect } from 'react';
import useFetch from '../components/useFetch';

const Home = () => {

    const [country] = useState('world');
    const api_url = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/";
    const [url, setUrl] = useState(`${api_url}/${country}`);

    const selectCountry = (e) => {
        const country = e.target.value;
        console.log(country);
        const url_country = 'Pakistan';
        const url_country_short = 'pak';
        const new_url = `${api_url}/country-report-iso-based/${url_country}/${url_country_short}`;
        setUrl(new_url);
    }


    const Countries = () => {
        const [countries, setCountries] = useState(null);

        useEffect(() => {
            async function fetchCountries() {
                try {
                    await fetch('https://restcountries.eu/rest/v2/all')
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            console.log(data);
                            setCountries(data);
                        })

                } catch (error) {
                    console.log(error);
                }
            }
        })

        return [countries];
    }

    const { data: Covid_Data, isPending, isError } = useFetch(url);
    const [Countries_Data] = Countries();

    



    // console.log(Countries_Data);
    return (
        <div className="container">
            <div className="jumbotron text-center">
                <h1>Coronavirus (COVID-19)</h1>
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

            <div className="row">
                <div className="col-md-12">
                    <img src={`https://flagcdn.com/w80/${Covid_Data && Covid_Data[0].TwoLetterSymbol}.png`} />

                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-warning mb-3">
                        <div className="card-body">
                            <h2 className="card-title"> Total Cases</h2>
                            <p className="card-text h3">{Covid_Data && Covid_Data[0].TotalCases}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-danger mb-3">
                        <div className="card-body">
                            <h2 className="card-title"> Total Deaths</h2>
                            <p className="card-text h3">{Covid_Data && Covid_Data[0].TotalDeaths}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-success mb-3">
                        <div className="card-body">
                            <h2 className="card-title"> Total Recovered</h2>
                            <p className="card-text h3">{Covid_Data && Covid_Data[0].TotalRecovered}</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-white bg-info mb-3">
                        <div className="card-body">
                            <h2 className="card-title"> Active Cases</h2>
                            <p className="card-text h3">{Covid_Data && Covid_Data[0].ActiveCases}</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Today's Data</h2>
            <div className="row">
                <div className="col-md-3">
                    <div className="card text-white bg-info mb-3">
                        <div className="card-body">
                            <h2 className="card-title">Deaths</h2>
                            <p className="card-text h3">{Covid_Data && Covid_Data[0].NewDeaths}</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-white bg-info mb-3">
                        <div className="card-body">
                            <h2 className="card-title">Cases</h2>
                            <p className="card-text h3">{Covid_Data && Covid_Data[0].NewCases}</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-white bg-info mb-3">
                        <div className="card-body">
                            <h2 className="card-title">Recovered</h2>
                            <p className="card-text h3">{Covid_Data && Covid_Data[0].NewRecovered}</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-white bg-info mb-3">
                        <div className="card-body">
                            <h2 className="card-title">Critical</h2>
                            <p className="card-text h3">{Covid_Data && Covid_Data[0].Serious_Critical}</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">
                <label className="label label-success">Case Fatality Rate {Covid_Data && Covid_Data[0].Case_Fatality_Rate}</label>
                <label className="label label-success">Deaths 1M population {Covid_Data && Covid_Data[0].Deaths_1M_pop}</label>
            </div>

        </div>);
}

export default Home;