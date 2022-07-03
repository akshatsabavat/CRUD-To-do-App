import ListBox from "../../Components/ListBox/ListBox";
import axios from "axios";

const ListContainer = () => {
  return (
    <div className="Tasks container">
      {isloading ? (
        <p>Loading....</p>
      ) : (
        <div>
          {apiData.map((task) => {
            return (
              <ListBox
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
