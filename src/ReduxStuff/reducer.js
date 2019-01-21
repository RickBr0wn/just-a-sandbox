import { combineReducers } from 'redux'

// param_1: must handle undefined cases with an intial state value to fall back on
// param_2: destructing of the action object
export const counter = (state = 0, { payload, type }) => {
  switch (type) {
    case 'INCREMENT':
      return state + payload.amount
    case 'DECREMENT':
      return state - payload.amount
    default:
      return state
  }
}

// The TODO REDUCER
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) return state
      return {
        ...state,
        completed: !this.state.completed,
      }
    default:
      return state
  }
}

// The TODOS REDUCER
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

// The VISIBILTY FILTER REDUCER
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILTY_FILTER':
      return action.visibilityFilter
    default:
      return state
  }
}

export const rootReducer = combineReducers({ counter, todos, visibilityFilter })
