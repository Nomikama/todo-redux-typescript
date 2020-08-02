import React from "react";
import "./CreateTodoItemForm.scss";

interface createTodoItemFormProps {
  newTask(formValue: string): void;
  sendData(e: React.FormEvent<HTMLFormElement>): void;
  curValue: string;
}

export const CreateTodoItemForm: React.FC<createTodoItemFormProps> = ({
  newTask,
  curValue,
  sendData,
}) => (
  <form className="create-todo-item-form" onSubmit={sendData}>
    <input
      type="text"
      placeholder="Текст задачи"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => newTask(e.target.value)}
      value={curValue}
    />
    <button className="create-task">Добавить задачу</button>
    <button className="cancel">Отмена</button>
  </form>
);
