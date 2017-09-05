export const toDoReducer = (state = {
  list: []
}, action) => {

  console.log(action)

  if (action.type === 'ADD' && state.list.indexOf(action.payload) < 0) {
    return {
      ...state,
      list: state.list.concat(action.payload)
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

  return state
}
