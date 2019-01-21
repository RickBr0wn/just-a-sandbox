import React, { Component } from 'react'
import { createStore } from 'redux'
import { combineReducers } from 'redux'
// Using mulitple reducers

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
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !this.state.completed,
      }
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

// combine the reducers
const todoApp = combineReducers({ todos, visibilityFilter })

/// create a STORE
const store = createStore(todoApp)

// GLOBAL VARIABLE to store/create new ids for TODOS
let nextTodoId = 0
// create the TODO APP
export class TodoApp extends Component {
  render() {
    return (
      <div>
        <input ref={node => (this.input = node)} />
        <button
          onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              text: this.input.value,
              id: nextTodoId++,
            })
            this.input.value = ''
          }}>
          Add Todo
        </button>
        <ul>
          {this.props.todos &&
            this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
      </div>
    )
  }
}
