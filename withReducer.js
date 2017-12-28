import React from 'react'
import { withReducer } from 'recompose'

const counterReducer = (count, { type }) => {
  switch (type) {
    case 'INCREMENT':
      return count + 1
    case 'DECREMENT':
      return count - 1
    default:
      return count
  }
}

const enhance = withReducer('count', 'dispatch', counterReducer, 0)
const Counter = ({ count, dispatch }) => (
  <div>
    Count: {count}
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>Inc</button>
    <button onClick={() => dispatch({ type: 'DECREMENT' })}>Dec</button>
  </div>
)

export default enhance(Counter)
