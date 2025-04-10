import React, { useState } from 'react'

const Counter = () => {

    // Create a state variable to store the value of the counter
    // A state is a variable that the value  change and reflected in the UI
    // Counter start from 0, button is pressed, counter increase by 1 and UI is refreshed

    // counter -> to retrieve the value of the counter [getter]
    // setCounter -> to set the value of the counter [setter]
    // useState(0) -> 0 is the initial value of the counter
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1) // Increment the value of counter by 1
    }

    const decrement = () => {
        setCounter(counter-1) // Decrement the value of counter by 1
    }

    const reset = () => {
        setCounter(0)
    }

  return (
    <div>
        <h3>Counter</h3>
        <h4>{counter}</h4>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter