import { useState, useEffect } from "react";
import axios from "axios";

const useAPI = (url) => {
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = await response.data;

        setApiData(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { error, isloading, apiData };
};

export default useAPI;
