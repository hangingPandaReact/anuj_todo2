import React, { useState } from "react";
import { BsFillArchiveFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";

export const Todolist = () => {
  const [todo, setTodo] = useState({ test: "", id: "" });
  const [todoslist, settodoslist] = useState([]);

  console.log(todoslist, "todoslist");

  // input handler
  const handleinput = (e) => {
    setTodo({ test: e.target.value, id: new Date() });
  };

  //Add todo task

  const addTodo = () => {
    console.log(todo.test, "todo");
    if (todo?.test === "") alert("this is empty");
    else {
      settodoslist([...todoslist, todo]);
    }
    setTodo({ test: "", id: "" });
  };

  //Delete task index
  // const deletTodo = (index) => {
  //   console.log(index, "getting");
  //   const newTodos = todoslist.filter((todo, i) => {
  //     return i !== index;
  //   });
  //   settodoslist(newTodos);
  // };

  //Delete task id
  const deletTodo = (id) => {
    console.log(id, "getting id");
    const newTodos = todoslist.filter((newtodo, i) => {
      return newtodo.id !== id;
    });
    settodoslist(newTodos);
  };

  return (
    <>
      <div>
        <input
          className="input-txt"
          type="test"
          placeholder="Write your task here"
          namer="todo"
          value={todo.test}
          onChange={(e) => handleinput(e)}
        />
        <button id="add-btn" onClick={addTodo}>
          <BsPlusLg />
        </button>
      </div>
      <div>
        {todoslist?.length > 0 ? (
          <ul className="todo-list">
            {todoslist.map((text, index) => (
              <div className="todo">
                <input type="checkbox" className="custom-checkbox" />
                <div className="txt">
                  <li className="listitem" key={index}>
                    {text?.test}
                  </li>
                </div>
                <div className="btnd">
                  <button className="edit-bt ">
                    <BsFillPencilFill />
                  </button>
                  <button
                    className="del-btn"
                    id="del-btn"
                    onClick={() => deletTodo(text.id)}
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
      </div>
    </>
  );
};
