import React, { useState } from 'react'
import Counter from './Counter'
import Child from './Child'
import Todo from './Todo'
import Product from './Product'

const Main = () => {
    // A state to hold the value of the input field
    // name - to retrieve the value of the input field [getter]
    // setName - to set the value of the input field [setter]
    // useState('') - '' is the initial value of the input field
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [message,setMessage] = useState('')

    const [childMessage,setChildMessage] = useState('')
    
    // Readonly
    const scores = [70,90,100,80,60];

    const handleMessage = (message) => {
        
        // This function will be called when button in child is pressed
        // ANd it will set the message to the state variable
        setChildMessage(message)

    }
   
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
        <hr />
        <Child  retrieveMessage={handleMessage}/>
        {
            // Conditional rendering
            // If childMessage is not empty, show the message
        childMessage !== '' && <p>{childMessage}</p>
        }
        <hr />
        <h2>Todo List demo</h2>
        <Todo/>
        <hr/>
        <h2>Product Page</h2>
        <Product/>
    </div>
  )
}

export default Main