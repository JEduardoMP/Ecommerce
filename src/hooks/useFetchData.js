import { useEffect, useState } from "react";


const useFetchData = (url) => {

    const [data, setData] = useState([])

    const handleDataAPI = async () => {
        try{
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        handleDataAPI();
    }, [url]);

    return {data};
}

export default useFetchData;