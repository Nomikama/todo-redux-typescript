import React from "react";
import "./CreateCategoryBtn.scss";

interface ICreateCategoryBtn {
  showForm(): void;
}

export const CreateCategoryBtn: React.FC<ICreateCategoryBtn> = ({ showForm }) => (
  <div className="show-create-category-form" onClick={showForm}>
    Добавить категорию
  </div>
);
