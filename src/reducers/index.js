import { combineReducers } from 'redux'

import { toDoReducer } from './ToDoReducer';

export const reducers = combineReducers({
  toDos: toDoReducer
})
