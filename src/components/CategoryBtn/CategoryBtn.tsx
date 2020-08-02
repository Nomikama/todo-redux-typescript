import React from "react";
import "./CategoryBtn.scss";

export const CategoryBtn: React.FC = () => (
  <div className="category__item">
    <div className="category__item-container">
      <span className="category__color"></span> Фронтенд
    </div>
    <span className="category__remove"></span>
  </div>
);
