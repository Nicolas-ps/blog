import axios from "axios";
import {useEffect, useState} from "react";

const useFetchPost = function (url, body = {}) {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.post(url, body)
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

export default useFetchPost;