import React from 'react'
import { Link } from 'react-router-dom'
const Products = () => {
  const type = 'drinks'
  return (
    <div>
      <h1>Product</h1>
      <Link to={`/products/${type}`}>Find my type</Link>
    </div>
  )
}

export default Products
