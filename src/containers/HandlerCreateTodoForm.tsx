import React, { useState } from "react";
import { CreateTodoItemBtn } from "./CreateTodoItemBtn";
import { CreateTodoItemForm } from "./CreateTodoItemForm";

export const HandlerCreateTodoForm: React.FC = () => {
  const [statusTodoForm, setStatusTodoForm] = useState<boolean>(false);

  if (statusTodoForm) {
    return <CreateTodoItemForm setStatusForm={setStatusTodoForm} />;
  } else {
    return <CreateTodoItemBtn setStatusForm={setStatusTodoForm} />;
  }
};
