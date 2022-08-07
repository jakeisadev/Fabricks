import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './../css/styles.css'

//useEffect keeps track of every re-render.
//You want to run axios everytime the page loads, so useEffect takes care of that.

const Home = () => {

  const [products, setProducts] = useState([]);
  //You can never modify any state without using its setter
  //If I want to save a value to products, it must be passed as an argument to the setter

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res => {
        console.log(res.data);
        setProducts(res.data); //products = res.data
      })
  }, [])

  //Put all dependencies (variables) into the empty array.
  //If I want it to run only once irrespective of the situation, just leave empty array.

  return (
    <>
    <div className="grid-container">
      {/* We can write JSX within the return statement through the map function */}
      {
        products.map((product) => { 
          return(
            <div className='products-list' key={product.id}>
              {/* Always apply a key to parent when bringing new info from axios */}
              {/* Create a card design, add to cart button, cart page where we list cart itesm. Will need
              another state variable for saving data in the cart. Once we click on cart, we can have a handler
              on it that pushes it to cart array and then transfers it to a different component.
              
              Search for cart designs online.*/}
              <img src={product.image} alt="all the items as practice" />
              <p className='clothing-title'>{product.title}</p>
              <p className='clothing-price'>{product.price}</p>
              <p className='clothing-description'>{product.description}</p>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Home