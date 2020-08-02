import React from "react";
import "./CreateTodoItemForm.scss";

export const CreateTodoItemForm: React.FC = () => (
  <form className="create-todo-item-form">
    <input type="text" placeholder="Текст задачи" />
    <button className="create-task">Добавить задачу</button>
    <button className="cancel">Отмена</button>
  </form>
);
