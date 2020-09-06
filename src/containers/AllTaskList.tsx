import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryTitle } from "../components/CategoryTitle/CategoryTitle";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { deleteTask, handlerComplateTask } from "../store/actions";
import { GlobalStateType } from "../store/rootReducer";

export const AllTaskList: React.FC = () => {
  const categoryList = useSelector((state: GlobalStateType) => state.todo.todoCategoryList);
  const taskList = useSelector((state: GlobalStateType) => state.todo.todoTaskList);
  const dispatch = useDispatch();

  const AllTaskListData = categoryList
    .map((category) => [
      { category: category },
      { tasks: taskList.filter((task) => task.category === category.id) },
    ])
    .filter((taskData) => taskData[1].tasks!.length > 0);

  const toggleTaskStatus = (id: number): void => {
    dispatch(handlerComplateTask(id));
  };

  const removeTask = (id: number): void => {
    dispatch(deleteTask(id));
  };

  if (AllTaskListData.length > 0) {
    return (
      <>
        {AllTaskListData.map((dataItem) => (
          <div key={dataItem[0].category?.id}>
            <CategoryTitle
              key={dataItem[0].category?.id}
              name={dataItem[0].category?.name || ""}
              color={dataItem[0].category?.color || ""}
            />

            {dataItem[1].tasks?.map((todoItem) => (
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
