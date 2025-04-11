import React, { useState } from 'react'

const Child = ({retrieveMessage}) => {
    const [message,setMessage] = useState('')

  return (
    <div>
        <input type="text" placeholder='Enter message to parents' 
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        />
        <button onClick={()=> retrieveMessage(message)}>Send Message</button>
    </div>
  )
}

export default Child