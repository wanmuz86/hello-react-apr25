import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Product = () => {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)

    // Is called when the component is mounted
    useEffect(() => {
        // call the setup for the componenet
        retrievePoductAsyncAwait()
    }
        , []) // call once



    const retrieveProductFetch = () => {
        const productId = Math.ceil(Math.random() * 194) // Generate random number from 1 to 194

        fetch(`https://dummyjson.com/products/${productId}`)
            .then(response => response.json()) // transfom to json
            .then(data => console.log(data.data)) // process data
            .catch(err => console.log(err))
    }

    const retrieveProductFetchAsyncAwait = async () => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        try {
            const productId = Math.ceil(Math.random() * 194) // Generate random number from 1 to 194    
            const response = await fetch(`https://dummyjson.com/products/${productId}`)
            const data = response.json()
            console.log(data)
        } catch (e) {
            console.log(e.message)
        }
    }
    // Add async to the nearest function declaration
    const retrievePoductAsyncAwait = async () => {

        try {
            setLoading(true)
            const productId = Math.ceil(Math.random() * 194) // Generate random number from 1 to 194

            const response = await axios.get(`https://dummyjson.com/products/${productId}`)
            setProduct(response.data)
            setLoading(false)
        }
        catch (e) {

            console.log(e.message)
            setLoading(false)
        }

    }

    const retrieveProduct = () => {
        // 1) Use then and catch to process async data (Promise)

        setLoading(true)

        const productId = Math.ceil(Math.random() * 194) // Generate random number from 1 to 194
        axios.get(`https://dummyjson.com/products/${productId}`)
            .then(response => {
                // success
                console.log(response.data)
                setProduct(response.data)
                setLoading(false)
            })
            .catch(error => {
                // error
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
                product ?
                    <div>
                        <h4>{product.title}</h4>
                        <img src={product.thumbnail} alt={product.title} />
                        <h5>{product.category} - USD {product.price}</h5>
                        <p>{product.description}</p>
                    </div>
                    :
                    <p>No product yet</p>
            }

            <button onClick={retrievePoductAsyncAwait} disabled={loading}>Retrieve New Product</button>
        </div>
    )
}

export default Product