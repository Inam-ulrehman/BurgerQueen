import React from 'react'
import { Link, useParams } from 'react-router-dom'

const TypeProducts = () => {
  const params = useParams()
  const singleProduct = `123`
  console.log(params.type)
  return (
    <div>
      <h1>TypeProducts</h1>
      <Link to={`/products/${params.type}/${singleProduct}`}>
        Go to single product
      </Link>
    </div>
  )
}

export default TypeProducts
