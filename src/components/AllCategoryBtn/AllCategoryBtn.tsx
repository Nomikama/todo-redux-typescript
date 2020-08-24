import React from "react";
import "./AllCategoryBtn.scss";

type IAllCategoryBtn = {
  checkActiveCategory: boolean;
  selectAllTaskBtn(): void;
};

export const AllCategoryBtn: React.FC<IAllCategoryBtn> = ({
  checkActiveCategory,
  selectAllTaskBtn,
}) => (
  <div
    className={checkActiveCategory ? "all-category active" : "all-category"}
    onClick={selectAllTaskBtn}
  >
    Все задачи
  </div>
);
