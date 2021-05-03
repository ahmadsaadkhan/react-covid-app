import { useState, useEffect } from "react";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        fetch('https://corona-api.com/countries')
        .then(res => {
            if(!res.ok){
              throw Error('Could not fetch the data');
            }
            return res.json();
          })
        .then( data => {
            setData(data);
          //  console.log(data);
            setIsPending(false);
            setIsError(null);
          })
        .catch((e) => {
            setIsPending(false);
            setIsError(e.message);
        })
      }, [url]);
      return { data, isPending, isError };
}
export default useFetch;