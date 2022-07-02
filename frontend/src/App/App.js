import "./App.css";
import useAPI from "../Hooks/useAPI";

const getAPI = (apiData, isloading) => {
  if (isloading) {
    console.log(isloading);
  } else {
    console.log(apiData);
  }
};

const App = () => {
  const { isloading, error, apiData } = useAPI("http://localhost:3000/tasks");
  return (
    <div className="App">
      <h1>Task app</h1>
      <button className="App-Btn" onClick={() => getAPI(apiData, isloading)}>
        Load Data
      </button>
    </div>
  );
};

export default App;
