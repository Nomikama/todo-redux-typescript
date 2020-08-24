import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateTodoItemFormComponents } from "../components";
import { createTask } from "../store/actions";
import { GlobalStateType } from "../store/rootReducer";

interface ICreateTodoItemForm {
  setStatusForm(status: false): void;
}

export const CreateTodoItemForm: React.FC<ICreateTodoItemForm> = ({ setStatusForm }) => {
  const state = useSelector((state: GlobalStateType) => state.todo);
  const setId = state.nextTaskID;
  const setCategory = state.activeCategoryID;
  const newTask = useDispatch();
  const [taskName, setTaskName] = useState<string>("");

  // Обработка input внутри form
  const inputFormHandler = (formValue: string): void => {
    setTaskName(formValue);
  };

  // Закрытие формы
  const closeForm = (): void => {
    setStatusForm(false);
  };

  // Событие отправки данных из формы
  const sendData = (e: React.FormEvent<HTMLFormElement>): false | void => {
    e.preventDefault();

    if (taskName.trim() === "") {
      return false;
    }

    newTask(createTask({ id: setId, category: setCategory, task: taskName, done: false }));

    setTaskName("");
    setStatusForm(false);
  };

  return (
    <CreateTodoItemFormComponents
      inputFormHandler={inputFormHandler}
      curValue={taskName}
      closeForm={closeForm}
      sendData={sendData}
    />
  );
};
