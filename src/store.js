import { createStore } from 'redux'

import { reducers } from './reducers'

export const store = createStore(reducers, {
  toDos: {
    list: []
  }
})

store.subscribe(() => {
  console.log('store changed', store.getState())
})