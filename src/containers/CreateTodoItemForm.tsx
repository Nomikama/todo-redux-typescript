import React, { useState } from "react";
import { CreateTodoItemFormComponents } from "../components";

export const CreateTodoItemForm: React.FC = () => {
  const [taskName, setTaskName] = useState<string>("");

  const addHandler = (formValue: string) => {
    setTaskName(formValue);
  };

  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskName.trim() === "") {
      return false;
    }

    console.log(taskName);

    setTaskName("");
  };

  return (
    <CreateTodoItemFormComponents newTask={addHandler} curValue={taskName} sendData={sendData} />
  );
};
