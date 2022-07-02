import useAPI from "../Hooks/useAPI";

const ListContainer = () => {
  const { isloading, apiData } = useAPI("http://localhost:3000/tasks");
  return (
    <div className="Tasks container">
      {isloading ? (
        <p>Loading....</p>
      ) : (
        <div>
          {apiData.map((task) => {
            return <p>{task.taskName}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default ListContainer;
