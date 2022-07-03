import { useState, useEffect } from "react";
import axios from "axios";

const useAPI = (url) => {
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState(null);
  const [taskState, setTaskState] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = await response.data;

        setApiData(data);
        setTaskState(data.taskState);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [taskState]);

  const setStatus = async (patchURL, taskID) => {
    const response = await axios.patch(patchURL, {
      id: taskID,
    });
    const data = await response.data;
    console.log(data);
  };

  return { error, isloading, apiData, setStatus };
};

export default useAPI;
