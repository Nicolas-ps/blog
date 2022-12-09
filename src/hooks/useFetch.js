import axios from "axios";
import {useEffect, useState} from "react";

const useFetch = function (url, headers= {}) {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const config = {
        headers: headers
    };

    useEffect(() => {
        axios.get(url, config)
            .then(function (response) {
                setIsLoading(false);
                setResponse(response.data);
            })
            .catch(function (error) {
                setIsLoading(false);
                setResponse(error.data);
            })
    }, [url]);

    return isLoading ? false : response;
}

export default useFetch;