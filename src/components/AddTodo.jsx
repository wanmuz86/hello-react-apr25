import React, { useState } from 'react'

const AddTodo = () => {
    const [item, setItem] = useState('')
    const handleClick = () => {
        console.log(item)
    }

  return (
    <div>
        <input type="text" 
        placeholder='Enter item to add'
        value={item}
        onChange={(e)=>setItem(e.target.value)}
        />
        <button onClick={handleClick}>Add new Item</button>
    </div>
  )
}

export default AddTodo