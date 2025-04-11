import React, { useState } from 'react'
import Counter from './Counter'

const Main = () => {
    // A state to hold the value of the input field
    // name - to retrieve the value of the input field [getter]
    // setName - to set the value of the input field [setter]
    // useState('') - '' is the initial value of the input field
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [message,setMessage] = useState('')
   
  return (
    <div>
        <h2 
        style={{textAlign:'center', 
        fontSize:'24px'}}>
            This is my main page
        </h2>
        <hr />
        {/* Passing data/configuration (props) to the component */}
        <Counter min={0} initialValue={0} max={10}/>
        <hr />
        <Counter min={-5} initialValue={10} max={10}/>
        <hr />
        <Counter min={-10} initialValue={30} max={50}/>
        <hr />
        <Counter min={-100} initialValue={-50} max={0} />

        <hr />
        <h2>My form</h2>

        <input type="text" placeholder='Enter your name' 
        value={name} 
        onChange={(e)=>setName(e.target.value)} />
        
        {/* Add input to retrieve the age */}
        <input type="text" placeholder='Enter your age'
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        />
        <p>{message}</p>
        {
            // Ternary operator or Conditional rendering
            // If ... then... if not

            age < 18 ? 
            <p>You cannot watch the movie</p> :
            <p>You can watch the movie</p>
        }
        <button onClick={()=>setMessage(`Hello ${name}, you are ${age} years old`)}>Click me</button>

    </div>
  )
}

export default Main