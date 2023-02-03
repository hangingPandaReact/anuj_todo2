import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import addicon from "../add.png";
import { BsFillArchiveFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { useState } from "react";
import { Alert } from "bootstrap";
import { BsPlusLg } from "react-icons/bs";

export function Todo() {
  const [todo, setTodo] = useState("");
  const [todoslist, settodoslist] = useState([]);

  console.log(todoslist, "todoslist");

  const handleinput = (e) => {
    setTodo(e.target.value);
  };

  console.log(todo, "todo");

  const addTodo = () => {
    console.log(todo, "todo");
    if (todo === "") alert("this is empty");
    else {
      settodoslist([...todoslist, todo]);
    }
    setTodo("");
  };

  const deletTodo = (index) => {
    const newTodos = todoslist.filter((todo) => {
      return todo !== text;
    });
    settodoslist(newTodos);
  };

  return (
    <>
      <input
        className="input-txt"
        type="test"
        placeholder="Write your task here"
        namer="todo"
        value={todo}
        onChange={(e) => handleinput(e)}
      />
      <button id="add-btn" onClick={addTodo}>
        <BsPlusLg />
      </button>

      {todoslist?.length > 0 ? (
        <ul className="todo-list">
          {todoslist.map((text, index) => (
            <div className="todo">
              <input type="checkbox" className="custom-checkbox" />
              <div className="txt">
                <li className="listitem" key={index}>
                  {text}
                </li>
              </div>
              <div className="btnd">
                <button className="edit-bt ">
                  <BsFillPencilFill />
                </button>
                <button
                  className="del-btn"
                  id="del-btn"
                  onClick={(index) => {
                    deleteTodo(index);
                  }}
                >
                  <BsFillArchiveFill />
                </button>
              </div>
            
            </div>
            
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>Task list is Empty</p>
        </div>
      )}
    </>
  );
}
