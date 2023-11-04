import React, { useState } from "react";
import "../App.css";

const TodoInp = (props) => {
  const [inputTask, setInputTask] = useState("");
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter Your Todo"
        value={inputTask}
        onChange={(e) => {
          setInputTask(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(inputTask)
          props.addList(inputTask);
          setInputTask("");
        }}
        className="add-btn"
      >
        +
      </button>
    </div>
  );
};

export default TodoInp;
