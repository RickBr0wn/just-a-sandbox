// param_1: must handle undefined cases with an intial state value to fall back on
// param_2: destructing of the action object
export const reducer = (state = 0, { payload, type }) => {
  switch (type) {
    case 'INCREMENT':
      return state + payload.amount
    case 'DECREMENT':
      return state - payload.amount
    default:
      return state
  }
}
