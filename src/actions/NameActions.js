import { store } from '../store'

export function addName(name) {
  store.dispatch({ type: 'ADD' })
}

export function updateInput(value) {
  store.dispatch({
    type: 'INPUT',
    payload: value
  })
}