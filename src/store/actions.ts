export const TODO__CREATE_TASK: string = 'ADD_NEW_TODO_TASK_ITEM';
export const TODO__CREATE_CATEGORY: string = 'ADD_NEW_TODO_CATEGORY_ITEM';
export const TODO__DELETE_TASK: string = 'DELETE_TODO_CATEGORY_ITEM';
export const TODO__DELETE_CATEGORY: string = 'DELETE_TODO_CATEGORY_ITEM';

export const APP__SHOW_CREATE_CATEGORY_FORM: string = "SHOW_CREATE_CATEGORY_FORM";
export const APP__SHOW_CREATE_TASK_FORM: string = "SHOW_CREATE_TASK_FORM";

export interface NewItem{
	id: number,
	name: string,
	color: string,
	taskList: [{
		id: number,
		category: string,
		task: string,
		done: boolean
	}]
}

interface CreateNewTask{
	type: typeof TODO__CREATE_TASK;
	payload: NewItem
}