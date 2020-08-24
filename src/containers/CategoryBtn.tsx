import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryBtnComponents } from "../components";
import { deleteCategory, selectActiveID } from "../store/actions";
import { GlobalStateType } from "../store/rootReducer";
import { ITodoCategories } from "../store/types";

export const CategoryBtn: React.FC = (): any => {
  const dispatch = useDispatch();
  const state = useSelector((state: GlobalStateType) => state.todo);
  const categoryList = state.todoCategoryList;
  const activeCategory = state.activeCategoryID;

  const selectCategory = (id: number): void => {
    if (activeCategory !== id) {
      dispatch(selectActiveID(id));
    }
  };

  const removeCategory = (id: number): void => {
    dispatch(deleteCategory(id));
    dispatch(selectActiveID(0));
  };

  return categoryList.map(
    (el: ITodoCategories): JSX.Element => {
      const active = el.id === activeCategory;
      return (
        <CategoryBtnComponents
          name={el.name}
          key={el.id}
          color={el.color}
          active={active}
          selectCategory={selectCategory}
          id={el.id}
          removeCategory={removeCategory}
        />
      );
    }
  );
};
