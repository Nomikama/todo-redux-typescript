export const TODO__CREATE_TASK = "ADD_NEW_TODO_TASK_ITEM";
export const TODO__CREATE_CATEGORY = "ADD_NEW_TODO_CATEGORY_ITEM";
export const TODO__DELETE_TASK = "DELETE_TODO_ITEM";
export const TODO__DELETE_CATEGORY = "DELETE_TODO_CATEGORY_ITEM";
export const TODO__SELECT_CATEGORY_ID = "SELECT_TODO_CATEGORY_ID";
export const TODO__HANDLERSTATUS_TASK = "HANDLER_TODO_STATUS_TASK";

export interface ITodoTaskList {
  id: number;
  category: number;
  task: string;
  done: boolean;
}

export interface ITodoCategories {
  id: number;
  name: string;
  color: string;
}

interface ICreateNewTask {
  type: typeof TODO__CREATE_TASK;
  payload: ITodoTaskList;
}

interface ICreateNewCategory {
  type: typeof TODO__CREATE_CATEGORY;
  payload: ITodoCategories;
}

interface IDeletedTask {
  type: typeof TODO__DELETE_TASK;
  payload: number;
}

interface IDeletedCategory {
  type: typeof TODO__DELETE_CATEGORY;
  payload: number;
}
interface ISelectedCategoryId {
  type: typeof TODO__SELECT_CATEGORY_ID;
  payload: number;
}

interface IHandlerStatusTask {
  type: typeof TODO__HANDLERSTATUS_TASK;
  payload: number;
}

export type ToDoActionsTypes =
  | ICreateNewTask
  | ICreateNewCategory
  | IDeletedTask
  | IDeletedCategory
  | ISelectedCategoryId
  | IHandlerStatusTask;
