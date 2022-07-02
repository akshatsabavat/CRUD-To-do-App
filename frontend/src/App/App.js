import "./App.css";
import Axios from "axios";

const getAPI = () => {
  Axios.get("http://localhost:3000/tasks").then((res) => console.log(res.data));
};

const App = () => {
  return (
    <div className="App">
      <h1>Task app</h1>
      <button className="App-Btn" onClick={getAPI}>
        Load Data
      </button>
    </div>
  );
};

export default App;
