import { combineReducers } from 'redux'

import { nameReducer } from './NameReducer';

export const reducers = combineReducers({
  names: nameReducer
})

