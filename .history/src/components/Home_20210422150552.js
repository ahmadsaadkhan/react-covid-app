import { useState } from 'react';
import useFetch from '../components/useFetch';

const Home = () => {

    const [country, setCountry] = useState('');
    const selectCountry = (e) => {
        setCountry(e.target.value);
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

            <h1>Covid Data</h1>
            <select onChange={selectCountry}>
                {Countries_Data && Countries_Data.map((c) => (
                    <option value={c.name} key={c.name}>{c.name}</option>
                ))}
            </select>
            {isError && <p>{isError}</p>}
            {isPending && <h2>loading...</h2>}

            {Covid_Data && Covid_Data.map((c) => (
               
                c.name === country ? (
                    <div className="section" key={c.code}>
                        <div className="row">
                            <div className="col-md-12 pt-2 pb-2">
                                <h2>{c.name}</h2>
                                <img src={`https://flagcdn.com/w160/${c.code.toLowerCase()}.png`} />
                                <p className="mt-2 mb-2">Population: {c.population}</p>
                            </div>
                            <div className="col-md-3">
                                <div className="card text-white bg-warning mb-3">
                                    <div className="card-body">
                                        <h2 className="card-title">Confirmed</h2>
                                        <p className="card-text h3">{c.latest_data.confirmed}</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-3">
                                <div className="card text-white bg-danger mb-3">
                                    <div className="card-body">
                                        <h2 className="card-title">Deaths</h2>
                                        <p className="card-text h3">{c.latest_data.deaths}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card text-white bg-success mb-3">
                                    <div className="card-body">
                                        <h2 className="card-title">Recovered</h2>
                                        <p className="card-text h3">{c.latest_data.recovered}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card text-white bg-info mb-3">
                                    <div className="card-body">
                                        <h2 className="card-title"> Critical</h2>
                                        <p className="card-text h3">{c.latest_data.critical}</p>
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
                                        <p className="card-text h3">{c.today.confirmed}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card text-white bg-info mb-3">
                                    <div className="card-body">
                                        <h2 className="card-title">Cases</h2>
                                        <p className="card-text h3">{c.today.deaths}</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <p>Cases 1M population {c.latest_data.calculated.cases_per_million_population}</p>
                            <p>Death Rate {c.latest_data.calculated.death_rate}</p>
                            <p>Recovery Rate {c.latest_data.calculated.recovery_rate}</p>
                            <p>wd {WorldTotalDeaths}</p>
                        </div>
                    </div>
                ) : ''
            ))}
        </div>

    );
}

export default Home;