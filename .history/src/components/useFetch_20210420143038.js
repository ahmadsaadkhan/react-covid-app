import { useState } from "react";

const useFetch = ((url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const [isError, setIsError] = useState(null);
    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
              throw Error('Could not fetch the data');
            }
            return res.json();
          })
        .then( data => {
           // console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
          })
        .catch((e) => {
            setIsPending(false);
            setError(e.message);
        })
      }, [url]);

});