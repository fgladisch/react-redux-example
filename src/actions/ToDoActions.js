import { store } from '../store'

export function addToDo() {
  store.dispatch({ type: 'ADD' })
}

export function removeToDo(name) {
  store.dispatch({ type: 'REMOVE', payload: name })
}

export function updateInput(value) {
  store.dispatch({
    type: 'INPUT',
    payload: value
  })
}