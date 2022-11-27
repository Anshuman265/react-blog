import { useState,useEffect } from "react";
// Changing the state value triggers react to re-render the state-component
// We automatically get access to the event parameter
const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);
    useEffect(() => {
        fetch(url).then(
            res=> {
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            }
        ).then((data)=>{
            setData(data);
            setIsPending(false);
            setError(null);
        }).catch((err) => {
            // Instead of logging the error in the console, we are going to set that error
            // console.log(err.message);
            setError(err.message);
            setIsPending(false);
        }) 
    }, [url]);

    return {data,isPending, error};
}

// Exporting the custom hook
export default useFetch;