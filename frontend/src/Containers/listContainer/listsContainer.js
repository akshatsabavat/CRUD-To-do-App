import useAPI from "../../Hooks/useAPI";
import ListBox from "../../Components/ListBox/ListBox";

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
