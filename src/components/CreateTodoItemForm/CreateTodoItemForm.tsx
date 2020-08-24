import React from "react";
import "./CreateTodoItemForm.scss";

interface ICreateTodoItemForm {
  inputFormHandler(formValue: string): void;
  sendData(e: React.FormEvent<HTMLFormElement>): void;
  curValue: string;
  closeForm(): void;
}

export const CreateTodoItemForm: React.FC<ICreateTodoItemForm> = ({
  inputFormHandler,
  curValue,
  sendData,
  closeForm,
}) => (
  <form className="create-todo-item-form" onSubmit={sendData}>
    <input
      type="text"
      placeholder="Текст задачи"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => inputFormHandler(e.target.value)}
      value={curValue}
      autoFocus
    />
    <button className="create-task">Добавить задачу</button>
    <button className="cancel" onClick={closeForm}>
      Отмена
    </button>
  </form>
);
