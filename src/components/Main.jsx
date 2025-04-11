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
    
    // Readonly
    const scores = [70,90,100,80,60];
   
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
        <hr />
        <h2>Score for today</h2>
        <ul>
            {
                // map function
                // foreach val in scores, show li with val
                // We need to add key, for react to identify each element
                // It needs to be unique

                //Option 1
                // scores.map(val=> <li key={val}>{val}</li>)

                // Option 2
                // If there is no unique item in the data used index as key
                scores.map((val,index)=> <li key={index}>{val}</li>)
            }
        </ul>

    </div>
  )
}

export default Main