import React from 'react'
import { mapProps, compose } from 'recompose'

// Presentaional component
const PriceDetails = ({ price }) => <div>{`${price}`}</div>

// business logic
const calculateTotal = mapProps(({ total, tax }) => ({
  price: total + tax,
}))

// Apply logic to presentational component
const Price = compose(calculateTotal)(PriceDetails)

// Render enhanced presentational component
const App = () => (
  <div>
    <Price total={1000} tax={110} />
  </div>
)

export default App
