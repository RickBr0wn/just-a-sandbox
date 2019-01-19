import React, { Component } from 'react'

export class ToggleRPC extends Component {
  state = { on: false, test: 'test' }

  toggle = () => this.setState({ on: !this.state.on })

  render() {
    const { children } = this.props
    return children({
      on: this.state.on,
      toggle: this.toggle,
      test: this.state.test,
    })
  }
}

export default ToggleRPC
