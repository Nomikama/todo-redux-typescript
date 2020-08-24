import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GlobalStateType } from "../store/rootReducer";
import { CreateTodoItemBtn } from "./CreateTodoItemBtn";
import { CreateTodoItemForm } from "./CreateTodoItemForm";

export const HandlerCreateTodoForm: React.FC = () => {
  const [statusTodoForm, setStatusTodoForm] = useState<boolean>(false);
  const activeCategory = useSelector(
    (state: GlobalStateType): number => state.todo.activeCategoryID
  );

  if (statusTodoForm) {
    return <CreateTodoItemForm setStatusForm={setStatusTodoForm} />;
  } else {
    return activeCategory > 0 ? <CreateTodoItemBtn setStatusForm={setStatusTodoForm} /> : null;
  }
};
