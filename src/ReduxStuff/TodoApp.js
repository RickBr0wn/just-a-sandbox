import React, { Component } from 'react'
import { connect } from 'react-redux'
import { todoActions } from './actions'

export const TodoApp = props => {
  const handleClick = (text, id) => {}

  let nextTodoId = 0
  // const { onTodoActions} = this.props.todos
  console.log((props));
  return (
    <div>
      <input />
      <button
        onClick={() => {
          todoActions(this.input.value, nextTodoId++)
          this.input.value = ''
        }}>
        Add Todo
      </button>
      <ul>
        {/* {props.todos &&
          props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)} */}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = {
  onTodoActions: todoActions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)
