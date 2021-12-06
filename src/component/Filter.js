import React from "react";
import Tasks from "./reducers/Task";

const Filter = ({ Task, active, onClickHandler }) => {
  const btnFilter = Tasks.map((status) => {
    return (
      <button
        key={status}
        onClick={() => onClickHandler(status)}
        className={active === status ? "isDone" : ""}
      >
        {status}
      </button>
    );
  });
  return <div>{btnFilter}</div>;
};

export default Filter;
