import useAPI from "../../Hooks/useAPI";
import ListBox from "../../Components/ListBox/ListBox";
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
          {apiData.map((task, index) => {
            return <ListBox listkey={index} listName={task.taskName} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ListContainer;
