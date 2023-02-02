import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import addicon from "../add.png";
import { useState } from "react";
export function Todo() {
  return (
    <>
      <InputGroup className="mb-3 input-class">
        <Form.Control
          placeholder="Write your task here"
          aria-label="todo"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="add-btn">
          <img
            src={addicon}
            alt="add-icon"
            width="10px"
            height="10px"
            className="addpngbtn"
          ></img>
        </Button>
      </InputGroup>
    </>
  );
}
