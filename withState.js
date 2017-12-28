import React from 'react'
import { compose, withHandlers, withState } from 'recompose'

const inputComponent = ({ username, onChange }) => (
  <div>
    {username}
    <input onChange={onChange} />
  </div>
)
const addHandler = compose(
  withState('username', 'updater', ''),
  withHandlers({
    onChange: ({ updater }) => event => {
      event.preventDefault()
      updater(event.target.value)
    },
  })
)

const EnhancedComponent = addHandler(inputComponent)

export default () => (
  <div>
    <EnhancedComponent />
  </div>
)
