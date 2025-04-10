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
        <Counter min={0} initialValue={0} max={10}/>
        <hr />
        <Counter min={-5} initialValue={10} max={10}/>
        <hr />
        <Counter min={-10} initialValue={30} max={50}/>
        <hr />
        <Counter min={-100} initialValue={-50} max={0} />
    </div>
  )
}

export default Main