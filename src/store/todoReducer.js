import { TODO__CREATE_CATEGORY } from "./actions";

const initialState = {
	todoData: [],
	appData: []
}

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case TODO__CREATE_CATEGORY:
			return { ...state, posts: [...state.posts] };

		default:
			return state
	}
}