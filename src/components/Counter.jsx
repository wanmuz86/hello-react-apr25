import React, { useState } from 'react'

// Retrieve the props / configuration passed to the component
//object destrucring of the props, to receive it in variable min
const Counter = ({min}) => {
   

    // Create a state variable to store the value of the counter
    // A state is a variable that the value  change and reflected in the UI
    // Counter start from 0, button is pressed, counter increase by 1 and UI is refreshed

    // counter -> to retrieve the value of the counter [getter]
    // setCounter -> to set the value of the counter [setter]
    // useState(0) -> 0 is the initial value of the counter

    const [counter, setCounter] = useState(0)

    const [message, setMessage] = useState('') 

    
    const increment = () => {
        setCounter(counter + 1) // Increment the value of counter by 1
        setMessage('') // Reset the message
    }
// Exercise: WHen user try to decrement the counter at 0, 
// a message should be shown on the UI, eg below h4, 
// Number cannot be less than 0, and it will go away when "Increment" or "Reset" is pressed


    const decrement = () => {
        if (counter <= min){
            setMessage(`Number cannot be less than ${min}`)
        }
        else {
            setCounter(counter-1) // Decrement the value of counter by 1
        }
    }

    const reset = () => {
        setCounter(0)
        setMessage('') // Reset the message
    }

  return (
    <div>
        <h3>Counter</h3>
        <h4>{counter}</h4>
        <p>{message}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter