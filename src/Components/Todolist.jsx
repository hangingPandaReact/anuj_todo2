import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import addicon from "../add.png";
import { useState } from "react";
import { Alert } from "bootstrap";
export function Todo() {
  const [todo, setTodo] = useState("");
  const [todoslist, settodoslist] = useState([]);

  const handleinput = (e) => {
    setTodo(e.target.value);
  };

  console.log(todo, "todo");

  const addTodo = () => {
    console.log(todo, "todo");
    if (todo == "") alert("this is empty");
    else {
      settodoslist([...todoslist, todo]);
    }
    setTodo("");
  };

  return (
    <>
      <InputGroup className="mb-3 input-class">
        <Form.Control
          placeholder="Write your task here"
          aria-label="todo"
          aria-describedby="basic-addon2"
          type="text"
          namer="todo"
          value={todo}
          onChange={(e) => handleinput(e)}
        />
        <Button variant="outline-secondary" id="add-btn" onClick={addTodo}>
          <img
            src={addicon}
            alt="add-icon"
            width="10px"
            height="10px"
            className="addpngbtn"
          ></img>
        </Button>
      </InputGroup>

      {todoslist?.length > 0 ? (
        <ul className="todo-list">
          {todoslist.map((text, index) => (
            <div className="todo">
              <div className="txt">
                <li className="listitem" key={index}>
                  {text}
                </li>
              </div>
              <div className="btnd">
                <button className="btnn edit-btn">Edit</button>
                <button className="btnn del-btn" id="del-btn">
                  Delete
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
