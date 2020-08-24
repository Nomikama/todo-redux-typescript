import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllCategoryBtnComponents } from "../components";
import { selectActiveID } from "../store/actions";
import { GlobalStateType } from "../store/rootReducer";

export const AllCategoryBtn: React.FC = (): JSX.Element | null => {
  const setAllTask = useDispatch();
  const state = useSelector((state: GlobalStateType) => state.todo);
  const checkActiveCategory = state.activeCategoryID === 0;
  const checkCreateCategory = state.todoCategoryList.length;

  const selectAllTaskBtn = (): void => {
    if (!checkActiveCategory) {
      setAllTask(selectActiveID(0));
    }
  };

  if (checkCreateCategory > 0) {
    return (
      <AllCategoryBtnComponents
        checkActiveCategory={checkActiveCategory}
        selectAllTaskBtn={selectAllTaskBtn}
      />
    );
  } else {
    return null;
  }
};
