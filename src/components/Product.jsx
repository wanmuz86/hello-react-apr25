import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Product = () => {

    const [product,setProduct] = useState(null)
    const [loading,setLoading] = useState(false)

    // Is called when the component is mounted
    useEffect(()=>{
        // call the setup for the componenet
        retrieveProduct()
    }
    ,[]) // call once


    const retrieveProduct = () => {
    // 1) Use then and catch to process async data (Promise)

    setLoading(true)

    const productId = Math.ceil(Math.random() * 194) // Generate random number from 1 to 194
    axios.get(`https://dummyjson.com/products/${productId}`)
    .then(response=> {
        console.log(response.data)
        setProduct(response.data)
        setLoading(false)
    })
    .catch(error=>{
        console.log(error)
        setLoading(false)
    })

    // 2) 
}
  return (
    <div>
         {
            loading && <p>Loading...</p>
        }
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
       
        <button onClick={retrieveProduct} disabled={loading}>Retrieve New Product</button>
    </div>
  )
}

export default Product