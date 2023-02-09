import React from "react";
import { Header } from "./Header";
import { TodoItem } from "./TodoItem";
export function Border() {
  return (
    <div className="box">
      <Header />
      <TodoItem />
    </div>
  );
}
