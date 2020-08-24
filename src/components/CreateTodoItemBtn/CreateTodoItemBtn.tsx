import React from "react";
import "./CreateTodoItemBtn.scss";

interface ICreateTodoItemBtn {
  showForm(): any;
}

export const CreateTodoItemBtn: React.FC<ICreateTodoItemBtn> = ({ showForm }) => (
  <div className="show-create-todo-form" onClick={showForm}>
    Новая задача
  </div>
);
