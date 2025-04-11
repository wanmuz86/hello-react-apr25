import React, { useState } from 'react'
import axios from 'axios'

const Product = () => {

    const [product,setProduct] = useState(null)

    const retrieveProduct = () => {
    // Use then and catch to process async data (Promise)
    axios.get('https://dummyjson.com/products/1')
    .then(response=> {
        console.log(response.data)
        setProduct(response.data)
    })
    .catch(error=>{
        console.log(error)
    })
}
  return (
    <div>
        {
            product?

            <div>
            <h4>{product.title}</h4>
            <img src={product.thumbnail} alt={product.title} />
            <h5>{product.category} - USD {product.price}</h5>
            <p>{product.description}</p>
            </div>
            :
            <p>No product yet</p>
        }
        <button onClick={retrieveProduct}>Retrieve Product</button>
    </div>
  )
}

export default Product