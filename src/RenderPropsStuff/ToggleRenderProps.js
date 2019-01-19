import React, { Component } from 'react'

export class ToggleRenderProps extends Component {
  state = { on: false, test: 'test' }

  toggle = () => this.setState({ on: !this.state.on })

  render() {
    const { render } = this.props
    return (
      <div>
        {render({
          on: this.state.on,
          toggle: this.toggle,
          test: this.state.test,
        })}
      </div>
    )
  }
}

export default ToggleRenderProps
