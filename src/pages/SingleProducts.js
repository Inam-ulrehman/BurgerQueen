import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../utils/sampleData'

const SingleProducts = () => {
  const params = useParams()

  const filterObject = products.find((item) => {
    const filterResult = item.id === params.singleProduct
    return filterResult
  })
  const {
    Carbohydrates,
    Fat,
    Fiber,
    Protein,
    Sodium,
    Sugar,
    calories,
    category,
    description,
    image,
    name,
    price,
    title,
  } = filterObject

  return (
    <div>
      <h1>SingleProduct</h1>
      <Link
        to={`/products/${params.type}/${params.singleProduct}/review`}
        className='btn'
      >
        Review's
      </Link>
      <Link to='/dashboard' className='btn'>
        Add to cart
      </Link>
      <Link to='/products' className='btn'>
        Back to menu
      </Link>
      <div>
        <h3>{name}</h3>
        <h1>{Fat}</h1>
        <div className='img-holder'>
          <img src={image} alt='' className='img' />
        </div>
      </div>
    </div>
  )
}

export default SingleProducts
