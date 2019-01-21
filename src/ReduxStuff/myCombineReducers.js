export const combineReducers = reducers => {
  return (state, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action)
      return nextState
    },{})
  }
}

// // my refactor of combineReducers
// export const combineReducers = reducers => (state, action) =>
//   Object.keys(reducers).reduce((nextState, key) => {
//     nextState[key] = reducers[key](state[key], action)
//     return nextState
//   }, {})
