import React from "react";
import { Header } from "./Header";
import { Todolist } from "./Todolist";
// import { Todo } from "./Todolist";
export function Border() {
  return (
    <div className="box">
      <Header />
      <Todolist />
    </div>
  );
}
