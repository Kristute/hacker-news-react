import { useState, useCallback, useEffect } from "react";
import axios from "axios";

interface Error {
  message: string;
}

const useApiRequest = (url: string) => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState<Error>();
  
    const loadData = useCallback(async () => {
        axios
        .get(url)
        .then(response => {
          setIsLoaded(true);
          setData(response.data);
        })
        .catch(error => {
          setError(error);
        });
       
    }, [url]);

    useEffect(() => {
        loadData();
    }, [url, loadData]);
  
    return { error, isLoaded, data };
  };

  export default useApiRequest;
