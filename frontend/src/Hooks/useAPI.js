// import { useState, useEffect } from "react";
// import axios from "axios";

// const useAPI = (url) => {
//   const [error, setError] = useState(null);
//   const [isloading, setIsLoading] = useState(true);
//   const [apiData, setApiData] = useState(null);

//   useEffect(() => {
//     setIsLoading(true);
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(url);
//         const data = await response.data;

//         setApiData(data);
//         setIsLoading(false);
//       } catch (err) {
//         setError(err);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const setStatus = async (patchURL, taskID) => {
//     await axios.patch(patchURL, {
//       id: taskID,
//     });
//   };

//   return { error, isloading, apiData, setStatus };
// };

// export default useAPI;
