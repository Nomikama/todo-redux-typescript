import {
  ITodoCategories,
  ITodoTaskList,
  ToDoActionsTypes,
  TODO__CREATE_CATEGORY,
  TODO__CREATE_TASK,
  TODO__DELETE_CATEGORY,
  TODO__DELETE_TASK,
  TODO__HANDLERSTATUS_TASK,
  TODO__SELECT_CATEGORY_ID,
} from "./types";

interface IToDoReducer {
  todoTaskList: ITodoTaskList[];
  todoCategoryList: ITodoCategories[];
  activeCategoryID: number;
  nextTaskID: number;
  nextCategoryID: number;
}

const todoInitialState: IToDoReducer = {
  todoTaskList: [],
  todoCategoryList: [],
  activeCategoryID: 0,
  nextTaskID: 1,
  nextCategoryID: 1,
};

export const todoReducer = (state = todoInitialState, action: ToDoActionsTypes): IToDoReducer => {
  switch (action.type) {
    case TODO__CREATE_CATEGORY:
      return {
        ...state,
        todoCategoryList: [...state.todoCategoryList, action.payload],
        nextCategoryID: state.nextCategoryID + 1,
      };
    case TODO__DELETE_CATEGORY:
      const removeCategory = state.todoCategoryList.filter(
        (categoryItem) => categoryItem.id !== action.payload
      );
      const removeTaskInCategory = state.todoTaskList.filter(
        (taskItem) => taskItem.category !== action.payload
      );
      return {
        ...state,
        todoCategoryList: removeCategory,
        todoTaskList: removeTaskInCategory,
      };
    case TODO__SELECT_CATEGORY_ID:
      return { ...state, activeCategoryID: action.payload };
    case TODO__CREATE_TASK:
      return {
        ...state,
        todoTaskList: [...state.todoTaskList, action.payload],
        nextTaskID: state.nextTaskID + 1,
      };
    case TODO__DELETE_TASK:
      const removeTask = [...state.todoTaskList].filter(
        (taskItem) => taskItem.id !== action.payload
      );
      return { ...state, todoTaskList: removeTask };
    case TODO__HANDLERSTATUS_TASK:
      const setStatusTask = [...state.todoTaskList].map((el) =>
        el.id === action.payload ? { ...el, done: !el.done } : el
      );
      return { ...state, todoTaskList: setStatusTask };
    default:
      return state;
  }
};
