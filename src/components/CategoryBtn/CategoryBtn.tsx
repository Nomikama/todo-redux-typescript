import React from "react";
import "./CategoryBtn.scss";

type ICategoryBtn = {
  name: string;
  color: string;
  active: boolean;
  selectCategory(id: number): void;
  removeCategory(id: number): void;
  id: number;
};

export const CategoryBtn: React.FC<ICategoryBtn> = ({
  name,
  color,
  active,
  selectCategory,
  id,
  removeCategory,
}) => (
  <div className="category__item">
    <div
      className={active ? "category__item-container active" : "category__item-container"}
      onClick={() => selectCategory(id)}
    >
      <span className="category__color" style={{ backgroundColor: color }}></span> {name}
    </div>
    <span className="category__remove" onClick={() => removeCategory(id)}></span>
  </div>
);
