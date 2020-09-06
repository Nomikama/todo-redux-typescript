import React from "react";
import { useSelector } from "react-redux";
import { GlobalStateType } from "../store/rootReducer";
import { AllTaskList } from "./AllTaskList";
import { CategoryTitle } from "./CategoryTitle";
import { HandlerCreateTodoForm } from "./HandlerCreateTodoForm";
import { TodoItem } from "./TodoItem";

export const HandlerTodoItem = () => {
  const activeCategory = useSelector(
    (state: GlobalStateType): number => state.todo.activeCategoryID
  );

  if (activeCategory > 0) {
    return (
      <div>
        <CategoryTitle />
        <TodoItem />
        <HandlerCreateTodoForm />
      </div>
    );
  } else {
    return <AllTaskList />;
  }
};
