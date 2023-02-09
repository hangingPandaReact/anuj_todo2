import React, { useState } from "react";
import { BsFillArchiveFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillPenFill } from "react-icons/bs";
import { BsFillBackspaceReverseFill } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";

export const TodoList = (props) => {
  const {
    handleinput,
    IsChecked,
    settodoslist,
    setIsEditing,
    setTodo,
    todo,
    addTodo,
    todoslist,
  } = props;
  const [currentTodo, setcurrentTodo] = useState("");

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
    const newTodos = props.todoslist.filter((newtodo, i) => {
      return newtodo.id !== id;
    });
    props.settodoslist(newTodos);
  };

  //Edit task
  const EditTodo = (index, text) => {
    const edit = props.todoslist[index];
    edit.isedit = !edit.isedit;
    props.todoslist[index] = edit;
    settodoslist([...props.todoslist]);
  };
  // Checkbox function
  function Checkbox(index) {
    const check = props.todoslist[index];
    check.isChecked = !check.isChecked;
    props.todoslist[index] = check;
    settodoslist([...props.todoslist]);
  }

  // Back function
  function Backlist(index) {
    const edit = props.todoslist[index];
    edit.isedit = !edit.isedit;
    props.todoslist[index] = edit;
    settodoslist([...props.todoslist]);
  }

  const handleinputupdate = (e) => {
    setcurrentTodo(e.target.value);
  };

  const updatetodo = (id) => {
    const newTodoList = [...todoslist];
    newTodoList.map((newtodo, i) => {
      if (newtodo?.id === id) {
        console.log(newtodo?.id);
        newtodo.test = currentTodo;
        newtodo.isedit = false;
      }
      return newTodoList;
    });
    settodoslist(newTodoList);
  };

  return (
    <div>
      {props.todoslist?.length > 0 ? (
        <ul className="todo-list">
          {props.todoslist.map((text, index) => {
            return (
              <div className="todo">
                <div>
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    onClick={() => Checkbox(index)}
                  />
                </div>
                <div className="txt">
                  {text?.isedit === true ? (
                    <div className="edit-item">
                      <div>
                        <input
                          value={currentTodo}
                          type="text"
                          className="-inputedit"
                          placeholder="Edit the task"
                          onChange={(e) => handleinputupdate(e)}
                        />
                      </div>
                      <div className="update-btn">
                        <button
                          className="update"
                          onClick={() => updatetodo(text.id)}
                        >
                          <BsFillPenFill />
                        </button>
                      </div>
                      <div className="del-btn ">
                        <button
                          className="back design"
                          onClick={() => Backlist(index)}
                        >
                          <BsFillBackspaceReverseFill />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <li
                      className={
                        text?.isChecked === true ? "completed" : "listitem"
                      }
                      key={index}
                    >
                      {text?.test}
                      {newtodo?.id}
                    </li>
                  )}
                </div>

                <div className={text?.isedit === true ? "display" : "btnd"}>
                  <button
                    className="edit-bt"
                    onClick={(e) => {
                      EditTodo(index, text);
                      setcurrentTodo(text.test);
                    }}
                    hidden={text?.isedit || text?.isChecked}
                  >
                    <BsFillPencilFill />
                  </button>
                  <button
                    className="del-btn"
                    id="del-btn"
                    hidden={text?.isedit}
                    onClick={() => deletTodo(text.id)}
                  >
                    <BsFillArchiveFill />
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      ) : (
        <div className="empty">
          <p>Task list is Empty</p>
        </div>
      )}
    </div>
  );
};
