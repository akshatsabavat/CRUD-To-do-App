import useAPI from "../Hooks/useAPI";
import { useState } from "react";

const ListContainer = () => {
  const { isloading, error, apiData } = useAPI("http://localhost:3000/tasks");
  console.log(isloading);
  console.log(apiData);
  return (
    <div className="Tasks container">
      {isloading ? (
        <p>Loading....</p>
      ) : (
        <div>
          {apiData.map((task) => {
            return <p key={task._id}>{task.taskName}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default ListContainer;
