import React from "react";
import { BsFillArchiveFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";

export const TodoList = (props) => {
  const { handleinput } = props;
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

  const EditTodo = (index) => {
    console.log("edit function is working");
    console.log(index);
  };

  return (
    <div>
      {props.todoslist?.length > 0 ? (
        <ul className="todo-list">
          {props.todoslist.map((text, index) => (
            <div className="todo">
              <input type="checkbox" className="custom-checkbox" />
              <div className="txt">
                <li className="listitem" key={index}>
                  {text?.test}
                </li>
              </div>
              <div className="btnd">
                <button className="edit-bt" onClick={() => EditTodo(index)}>
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
  );
};
