import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleProducts = () => {
  const params = useParams()
  const reviews = `456`
  console.log(params)

  return (
    <div>
      <h1>SingleProduct</h1>
      <Link to={`/products/${params.type}/${params.singleProduct}/${reviews}`}>
        Review this Product
      </Link>
    </div>
  )
}

export default SingleProducts
