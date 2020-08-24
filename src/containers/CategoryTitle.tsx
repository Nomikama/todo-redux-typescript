import React from "react";
import { useSelector } from "react-redux";
import { CategoryTitleComponents } from "../components";
import { GlobalStateType } from "../store/rootReducer";

interface ICategoryTitle {
  id: number;
  name: string;
  color: string;
}

export const CategoryTitle: React.FC = (): any => {
  const state = useSelector((state: GlobalStateType) => state.todo);
  const activeCategory =
    state.todoCategoryList.filter((el: ICategoryTitle) => el.id === state.activeCategoryID) || [];

  return activeCategory.map(
    (el: ICategoryTitle): JSX.Element => (
      <CategoryTitleComponents name={el.name} key={el.id} color={el.color} />
    )
  );
};
