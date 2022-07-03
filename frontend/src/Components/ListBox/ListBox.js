import { useState } from "react";
import useAPI from "../../Hooks/useAPI";
import "../ListBox/ListBox.css";

const ListBox = (props) => {
  const { setStatus } = useAPI("http://localhost:3000/tasks");
  return (
    <div className="box-Container">
      <p className="listname">{props.listName}</p>
      <div className="cta-Container">
        <button
          onClick={() =>
            setStatus("http://localhost:3000/tasks/completed", props.taskID)
          }
        >
          Mark Done
        </button>
        <button
          onClick={() =>
            setStatus("http://localhost:3000/tasks/undone", props.taskID)
          }
        >
          Mark UnDone
        </button>
        <button>Remove Task</button>
      </div>
    </div>
  );
};

export default ListBox;
