import React from "react";
import "./TodoItem.scss";

export const TodoItem: React.FC = () => (
  <div className="todo-item">
    <label className="todo-item__container">
      <input type="checkbox" name="color-2" value="red" />
      <span>Изучить JavaScript</span>
    </label>
    <span className="todo-item__remove"></span>
  </div>
);
