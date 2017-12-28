import React from 'react'
import { compose, withHandlers } from 'recompose'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'

// Action creator
const setName = payload => ({
  type: 'SET_NAME',
  payload,
})

// Reducer function
const reducer = (state = { name: '' }, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_NAME':
      return { ...state, name: payload }

    default:
      return state
  }
}

// Redux store
const store = createStore(reducer)

// Presentational component
const InputComponent = ({ name, onChange }) => (
  <div>
    {name}
    <input onChange={onChange} />
  </div>
)

// HOC to Connect with Redux store and action creators and pass them as props
const withActionHandlers = compose(
  connect(({ name }) => ({ name }), { setName }),
  withHandlers({
    onChange: ({ setName }) => event => {
      event.preventDefault()
      setName(event.target.value)
    },
  })
)

// Apply HOC to presentational component
const ConnectedInputComponent = withActionHandlers(InputComponent)

// Provide store to the parent of the connected component
export default (
  <Provider store={store}>
    <ConnectedInputComponent />
  </Provider>
)
