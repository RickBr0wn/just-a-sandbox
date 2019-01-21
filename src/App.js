import React from 'react'
import Toggle from './RenderPropsStuff/ToggleRPC'
import Counter from './ReduxStuff/Counter'
import { TodoApp } from './ReduxStuff/TodoApp'

const App = () => {
  return (
    <div>
      <h1>RENDER PROPS</h1>
      <Toggle>
        {({ on, toggle, test }) => (
          <>
            {on && <h1>{test}</h1>}
            <button onClick={toggle}>Show / Hide</button>
          </>
        )}
      </Toggle>
      <br />
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <br />
      <TodoApp />
    </div>
  )
}

export default App
