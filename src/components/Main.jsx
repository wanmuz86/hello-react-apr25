import React from 'react'
import Counter from './Counter'

const Main = () => {
  return (
    <div>
        <h2 
        style={{textAlign:'center', 
        fontSize:'24px'}}>
            This is my main page
        </h2>
        <hr />
        {/* Passing data/configuration (props) to the component */}
        <Counter min={0}/>
        <hr />
        <Counter min={-5}/>
        <hr />
        <Counter min={-10}/>
        <hr />
        <Counter min={-100}/>
    </div>
  )
}

export default Main