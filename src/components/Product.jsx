import React from 'react'
import axios from 'axios'

const Product = () => {

    const retrieveProduct = () => {
    // Use then and catch to process async data (Promise)
    axios.get('https://dummyjson.com/products/1')
    .then(response=> {
        console.log(response.data)
    })
    .catch(error=>{
        console.log(error)
    })
}
  return (
    <div>
        <button onClick={retrieveProduct}>Retrieve Product</button>
    </div>
  )
}

export default Product