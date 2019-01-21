import React from 'react'
import { connect } from 'react-redux'
import { up, down } from './actions'

const Counter = ({ value, up, down }) => {
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={up}>
        +
      </button>
      <button className="btn" onClick={down}>
        -
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  value: state.counter,
})

const mapDispatchToProps = {
  up,
  down,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
