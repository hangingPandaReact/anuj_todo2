import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { TodoList } from "./TodoList";

export const TodoItem = () => {
  const [todo, setTodo] = useState({ test: "", id: "", edit: false });
  const [todoslist, settodoslist] = useState([]);

  // input handler
  const handleinput = (e) => {
    console.log(todo, "todo");
    setTodo({ test: e.target.value, id: new Date(), edit: false });
  };

  //Add todo task

  const addTodo = () => {
    console.log(todo, "todo");
    if (todo?.test === "") alert("this is empty");
    else {
      settodoslist([...todoslist, todo]);
    }
    setTodo({ test: "", id: "" });
  };

  return (
    <>
      <div>
        <input
          className="input-txt"
          type="text"
          placeholder="Write your task here"
          name="todo"
          value={todo.test}
          onChange={(e) => handleinput(e)}
        />
        <button id="add-btn" onClick={addTodo} disabled={!todo.test}>
          <BsPlusLg />
        </button>
      </div>

      <TodoList
        handleinput={handleinput}
        addTodo={addTodo}
        settodoslist={settodoslist}
        todoslist={todoslist}
      />
    </>
  );
};
