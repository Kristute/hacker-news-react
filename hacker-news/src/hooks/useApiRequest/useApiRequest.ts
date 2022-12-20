import { useState, useCallback, useEffect } from "react";
import axios from "axios";

interface Error {
  message: string;
}

const useApiRequest = <DataType>(url: string) => {
  const [data, setData] = useState<DataType>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  const loadData = useCallback(async () => {
    
    try {
      const response = await axios.get(url)
    
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error as Error);
    }
  }, [url]);

  useEffect(() => {
    loadData();
  }, [url, loadData]);

  return { error, loading, data };
};

export default useApiRequest;
