import { useState, useCallback, useEffect } from "react";
import axios from "axios";

interface Error {
  message: string;
}

const useApiRequest = (url: string) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  const loadData = useCallback(async () => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [url]);

  useEffect(() => {
    loadData();
  }, [url, loadData]);

  return { error, loading, data };
};

export default useApiRequest;
