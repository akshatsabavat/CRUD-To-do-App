import { useState } from "react";
import "../ListBox/ListBox.css";

const ListBox = (props) => {
  return (
    <div className="box-Container">
      <p className="listname" key={props.listkey}>
        {props.listName}
      </p>
      <div className="cta-Container">
        <button>Mark Done</button>
        <button>Mark UnDone</button>
        <button>Remove Task</button>
      </div>
    </div>
  );
};

export default ListBox;
