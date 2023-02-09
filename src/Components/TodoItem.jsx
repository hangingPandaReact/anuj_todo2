import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { TodoList } from "./TodoList";
export const TodoItem = () => {
  const [todo, setTodo] = useState({
    test: "",
    id: "",
    edit: false,
    isChecked: false,
  });
  const [todoslist, settodoslist] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  // input handler
  const handleinput = (e) => {
    // console.log(todo, "todo");
    setTodo({
      test: e.target.value,
      id: new Date(),
      isedit: false,
      isChecked: false,
    });
  };

  //Add todo task

  const addTodo = () => {
    if (todo?.test.match(/^\s*$/));
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
        <button
          id="add-btn"
          onClick={addTodo}
          disabled={todo.test.match(/^\s*$/)}
        >
          <BsPlusLg />
        </button>
      </div>

      <TodoList
        handleinput={handleinput}
        addTodo={addTodo}
        settodoslist={settodoslist}
        todoslist={todoslist}
        setCurrentTodo={setCurrentTodo}
        setIsEditing={setIsEditing}
        todo={todo}
      />
    </>
  );
};
