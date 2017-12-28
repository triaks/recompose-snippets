// Adds new props to a components. Existing props are not replaced.
// Input Props : { greeting: 'hello' }
// Output Props: { greeting: 'hello', name: 'akash', surname: 'tripathy' }

import React from 'react'
import { withProps, compose } from 'recompose'

// Presentational component
const view = ({ text, name, surname }) => (
  <div>{`${text} ${name} ${surname}`}</div>
)

// Enhance presentational component with new props
const addName = withProps(props => ({
  name: 'akash',
  surname: 'tripathy',
}))

const Greeting = compose(addName)(view)

const App = () => (
  <div>
    <Greeting text="hello" />
  </div>
)

export default App
