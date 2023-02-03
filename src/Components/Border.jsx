import React from "react";
import { Header } from "./Header";
import { Todo } from "./Todolist";
export function Border() {
  return (
    <div className="box">
      <Header />
      <Todo />
    </div>
  );
}
