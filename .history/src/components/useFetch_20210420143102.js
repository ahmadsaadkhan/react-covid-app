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