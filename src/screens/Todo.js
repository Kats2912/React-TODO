import React, { useState, useEffect } from "react";
import "../App.css";
import TodoInp from "../components/TodoInp";
import TodoList from "../components/TodoList";
import Button from "react-bootstrap/Button";
import { useNavigate, useLocation } from "react-router-dom";

export const Todo = (props) => {
  const history = useNavigate();
  const [data, setData] = useState([]);
  const logout = () => {
    localStorage.removeItem("user_login");
    history("/login");
  };
  const clearall = () => {
    const user_data = JSON.parse(localStorage.getItem('user_login'));
    user_data.list.splice(0,user_data.list.length)
    localStorage.setItem('user_login', JSON.stringify(user_data))
    setListTodo([])
  };
  const [listTodo, setListTodo] = useState([]);
  const display = () => {
    const user_todo = JSON.parse(localStorage.getItem("user_login"));
    setListTodo(user_todo.list);
  };
  const addList = (inputText) => {
    if (inputText !== "") {
      setListTodo([...listTodo, inputText]);
      const user_todo = JSON.parse(localStorage.getItem("user_login"));
      user_todo.list.push(inputText);
      localStorage.setItem("user_login", JSON.stringify(user_todo));
    }
  };
  const removeListItem = (key) => {
    let newTodoList = [...listTodo];
    newTodoList.splice(key, 1);
    setListTodo([...newTodoList]);
    const user_todo = JSON.parse(localStorage.getItem("user_login"));
    user_todo.list.splice(key, 1);
    localStorage.setItem("user_login", JSON.stringify(user_todo));
  };
  useEffect(() => {
    display();
  },[]);
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInp addList={addList} />
        <h1>TODO List</h1>
        <hr />
        {listTodo.map((listitem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listitem}
              removeListItem={removeListItem}
            />
          );
        })}
        <Button onClick={logout}>Logout</Button>
        <Button onClick={clearall}>Clear All</Button>
      </div>
    </div>
  );
};
