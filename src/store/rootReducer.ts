import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
  todo: todoReducer,
});

type RootReducerType = typeof rootReducer;
export type GlobalStateType = ReturnType<RootReducerType>;
