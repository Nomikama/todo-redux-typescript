import React from "react";
import "./TodoItem.scss";

type ITodoItem = {
  taskName: string;
  id: number;
  toggleTaskStatus(id: number): void;
  removeTask(id: number): void;
  status: boolean;
};

export const TodoItem: React.FC<ITodoItem> = ({
  taskName,
  toggleTaskStatus,
  id,
  status,
  removeTask,
}) => (
  <div className="todo-item">
    <label className="todo-item__container">
      <input type="checkbox" checked={status} onChange={() => toggleTaskStatus(id)} />
      <span>{taskName}</span>
    </label>
    <span className="todo-item__remove" onClick={() => removeTask(id)}></span>
  </div>
);
