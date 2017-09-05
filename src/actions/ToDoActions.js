import { store } from '../store'

export function addToDo(text) {
  store.dispatch({ type: 'ADD', payload: text })
}

export function removeToDo(text) {
  store.dispatch({ type: 'REMOVE', payload: text })
}
