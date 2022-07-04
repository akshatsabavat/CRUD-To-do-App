import "../ListBox/ListBox.css";

const ListBox = (props) => {
  return (
    <div className="box-Container">
      <p className={props.taskStatus ? "listname-done" : "listname"}>
        {props.listName}
      </p>
      <div className="cta-Container">
        <button onClick={props.completeFunction}>Mark Done</button>
        <button onClick={props.undoFunction}>Mark UnDone</button>
        <button onClick={props.removeFunction}>Remove Task</button>
      </div>
    </div>
  );
};

export default ListBox;
