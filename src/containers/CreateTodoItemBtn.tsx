import React from "react";
import { CreateTodoItemBtnComponents } from "../components";

interface ICreateTodoItemBtn {
  setStatusForm(status: true): void;
}

export const CreateTodoItemBtn: React.FC<ICreateTodoItemBtn> = ({ setStatusForm }) => {
  const showForm = (): void => {
    setStatusForm(true);
  };

  return <CreateTodoItemBtnComponents showForm={showForm} />;
};
