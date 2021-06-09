import { Action } from "redux";
import { Todo, FetchTodosAction, ActionTypes } from "../actions";

export const todosReducer = (
  state: Todo[] = [],
  action: FetchTodosAction // not just this action
) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
}