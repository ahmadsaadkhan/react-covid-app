import { useState, useEffect } from "react";

const useFetch = (() => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world", {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "3d33dc1e13mshc5f97558480723fp15e23bjsnc1db1b7183da",
              "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
            }
          })
        .then(res => {
            if(!res.ok){
              throw Error('Could not fetch the data');
            }
            return res.json();
          })
        .then( data => {
            setData(data);
            setIsPending(false);
            setIsError(null);
          })
        .catch((e) => {
            setIsPending(false);
            setIsError(e.message);
        })
      }, [url]);

});