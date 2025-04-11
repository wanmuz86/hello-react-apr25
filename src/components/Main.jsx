import React, { useState } from 'react'
import Counter from './Counter'

const Main = () => {
    // A state to hold the value of the input field
    // name - to retrieve the value of the input field [getter]
    // setName - to set the value of the input field [setter]
    // useState('') - '' is the initial value of the input field
    const [name,setName] = useState('')
   
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
        <button onClick={()=>alert(`Hello ${name}`)}>Click me</button>

    </div>
  )
}

export default Main