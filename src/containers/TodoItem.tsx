import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoItemComponents } from "../components";
import { deleteTask, handlerComplateTask } from "../store/actions";
import { GlobalStateType } from "../store/rootReducer";
import { ITodoTaskList } from "../store/types";

export const TodoItem: React.FC = (): any => {
  const dispatch = useDispatch();
  const state = useSelector((state: GlobalStateType) => state.todo);
  const activeId = state.activeCategoryID;
  const taskList = state.todoTaskList.filter(
    (taskItem: ITodoTaskList) => activeId === taskItem.category
  );

  const toggleTaskStatus = (id: number): void => {
    dispatch(handlerComplateTask(id));
  };

  const removeTask = (id: number): void => {
    dispatch(deleteTask(id));
  };

  return taskList.map((item: ITodoTaskList) => {
    return (
      <TodoItemComponents
        taskName={item.task}
        key={item.id}
        id={item.id}
        status={item.done}
        toggleTaskStatus={toggleTaskStatus}
        removeTask={removeTask}
      />
    );
  });
};
