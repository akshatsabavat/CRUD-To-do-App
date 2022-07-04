import ListBox from "../../Components/ListBox/ListBox";
import "./listContainer.css";
import axios from "axios";
import { useState, useEffect } from "react";

const ListContainer = () => {
  const [apiData, setApiData] = useState([]);
  const [newTodo, setNewTodo] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/tasks");
      const data = await response.data;
      setApiData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const completeTask = async (taskID) => {
    await axios.patch("http://localhost:3000/tasks/completed", {
      id: taskID,
    });

    getData();
  };

  const UndoTask = async (taskID) => {
    await axios.patch("http://localhost:3000/tasks/undone", {
      id: taskID,
    });

    getData();
  };

  const deleteTask = async (taskID) => {
    await axios.delete("http://localhost:3000/tasks/" + taskID);
    console.log("hi");
    getData();
  };

  const addTask = async (taskName) => {
    setIsLoading(true);
    try {
      await axios.post("http://localhost:3000/tasks", {
        taskName: taskName,
        taskState: false,
      });
      getData();
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="Tasks container">
      <input
        type="text"
        className="inputFeild"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <button className="addBtn" onClick={() => addTask(newTodo)}>
        add task
      </button>
      {isloading ? (
        <p>Loading....</p>
      ) : (
        <div>
          {apiData.map((task) => {
            return (
              <ListBox
                removeFunction={() => deleteTask(task._id)}
                completeFunction={() => completeTask(task._id)}
                undoFunction={() => UndoTask(task._id)}
                taskStatus={task.taskState}
                taskID={task._id}
                key={task._id}
                listName={task.taskName}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ListContainer;
