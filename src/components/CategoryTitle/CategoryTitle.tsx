import React from "react";
import "./CategoryTitle.scss";

type ICategoryTitle = {
  name: string;
  color: string;
};

export const CategoryTitle: React.FC<ICategoryTitle> = ({ name, color }) => (
  <h1 className="title" style={{ color: color }}>
    {name}
  </h1>
);
