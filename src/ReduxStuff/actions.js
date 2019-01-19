export const up = () => ({
  type: 'INCREMENT',
  payload: {
    amount: 1,
  },
})

export const down = () => ({
  type: 'DECREMENT',
  payload: {
    amount: 1,
  },
})
