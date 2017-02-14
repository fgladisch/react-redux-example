export const toDoReducer = (state = {
  input: '',
  list: []
}, action) => {

  console.log(action)

  if (action.type === 'ADD' && state.input && state.list.indexOf(state.input) < 0) {
    return {
      ...state,
      list: state.list.concat(state.input)
    }
  }

  if (action.type === 'REMOVE') {
    return {
      ...state,
      list: state.list.filter(value => {
        return value !== action.payload
      })
    }
  }

  if (action.type === 'INPUT') {
    return {
      ...state,
      input: action.payload
    }
  }

  return state
}
