export const addCounter = arr => [...arr, 0]

export const removeCounter = (arr, index) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1),
]

// my refactor of removeCounter
export const removeFromArray = (arr, index) => arr.filter((item, idx) => index !== idx)

export const incrementCounter = (arr, index) => [
  ...arr.slice(0, index),
  arr[index] + 1,
  ...arr.slice(index + 1),
]

// my refactor of incrementCounter
export const incrementAnElementInArray = (arr, index) => {
  arr.map((element, idx) => {
    if (index === idx) {
      arr[idx]++
    }
  })
  return arr
}

export const toggleTodo = todos =>
  Object.assign({}, todos, { completed: !todos.completed })

let arr = [1, 2, 3, 4, 9, 5, 6]
removeFromArray(arr, 0) //?
removeCounter(arr, 4) //?
incrementCounter(arr, 4) //?
