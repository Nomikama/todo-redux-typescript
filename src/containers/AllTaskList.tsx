import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryTitle } from "../components/CategoryTitle/CategoryTitle";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { deleteTask, handlerComplateTask } from "../store/actions";
import { GlobalStateType } from "../store/rootReducer";
import { ITodoCategories, ITodoTaskList } from "../store/types";

export const AllTaskList: React.FC = () => {
  const categoryList = useSelector((state: GlobalStateType) => state.todo.todoCategoryList);
  const taskList = useSelector((state: GlobalStateType) => state.todo.todoTaskList);
  const dispatch = useDispatch();

  const toggleTaskStatus = (id: number): void => {
    dispatch(handlerComplateTask(id));
  };

  const removeTask = (id: number): void => {
    dispatch(deleteTask(id));
  };

  if (taskList.length > 0) {
    return (
      <>
        {categoryList.map((category: ITodoCategories) => (
          <div key={category.id}>
            <CategoryTitle key={category.id} name={category.name} color={category.color} />

            {taskList
              .filter((task: ITodoTaskList) => task.category === category.id)
              .map((todoItem: ITodoTaskList) => (
                <TodoItem
                  key={todoItem.id}
                  taskName={todoItem.task}
                  id={todoItem.id}
                  status={todoItem.done}
                  toggleTaskStatus={toggleTaskStatus}
                  removeTask={removeTask}
                />
              ))}
          </div>
        ))}
      </>
    );
  } else {
    return <div className="task-list-empty">Задачи отсутствуют</div>;
  }
};
