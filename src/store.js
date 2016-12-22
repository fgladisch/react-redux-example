import { createStore } from 'redux'

import { reducers } from './reducers'

export const store = createStore(reducers, {
  names: {
    list: [],
    input: 'Felix'
  }
})

store.subscribe(() => {
  console.log('store changed', store.getState())
})