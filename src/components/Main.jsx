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
        <Counter/>
    </div>
  )
}

export default Main