import React from "react";
import "../App.css";

const TodoList = (props) => {
  return (
    <li className="list-item">
      <h1 style={{color: "black"}}>{props.item}</h1>
      <span className="icons">
        <i
          style={{color:"black"}}
          className="fa-solid fa-trash-can icon-delete"
          onClick={e => {
            props.removeListItem(props.index);
          }}
        ></i>
        
  <input type="checkbox" id="accept" name="accept" />  
  <label htmlFor="accept"> Accept </label>

      </span>
    </li>
  );
};

export default TodoList;
