import React from 'react'
import { compose, withReducer, withHandlers } from 'recompose'

const userInput = ({ user, handleUsername, handlePassword }) => (
  <div>
    <input type="email" onChange={handleUsername} />
    <input type="password" onChange={handlePassword} />
    <DisplayUser user={user} />
  </div>
)

const DisplayUser = ({ user: { username } }) => <div>{username}</div>

const initialState = { username: '', password: '' }

const userReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_USERNAME':
      return { ...state, username: payload }

    case 'SET_PASSWORD':
      return { ...state, password: payload }

    default:
      return state
  }
}

const addReducer = compose(
  withReducer('user', 'dispatch', userReducer, initialState),
  withHandlers({
    handleUsername: ({ dispatch }) => event => {
      event.preventDefault()
      dispatch({ type: 'SET_USERNAME', payload: event.target.value })
    },
    handlePassword: ({ dispatch }) => event => {
      event.preventDefault()
      dispatch({ type: 'SET_PASSWORD', payload: event.target.value })
    },
  })
)

const EnhancedUserInput = addReducer(userInput)

export default (
  <div>
    <EnhancedUserInput />
  </div>
)
