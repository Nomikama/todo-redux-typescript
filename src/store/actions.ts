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

export const createNewCategory = (data: ITodoCategories): ToDoActionsTypes => {
  return { type: TODO__CREATE_CATEGORY, payload: data };
};

export const deleteCategory = (id: number): ToDoActionsTypes => {
  return { type: TODO__DELETE_CATEGORY, payload: id };
};

export const selectActiveID = (id: number): ToDoActionsTypes => {
  return { type: TODO__SELECT_CATEGORY_ID, payload: id };
};

export const createTask = (data: ITodoTaskList): ToDoActionsTypes => {
  return { type: TODO__CREATE_TASK, payload: data };
};

export const deleteTask = (id: number): ToDoActionsTypes => {
  return { type: TODO__DELETE_TASK, payload: id };
};

export const handlerComplateTask = (id: number): ToDoActionsTypes => {
  return { type: TODO__HANDLERSTATUS_TASK, payload: id };
};
