import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SingleProducts = () => {
  const { products } = useSelector((state) => state.product)
  const params = useParams()
  const filterObject = products.filter((item) => {
    const filterResult = item._id === params.singleProduct
    return filterResult
  })
  return (
    <div>
      <h1>SingleProduct</h1>
      <Link
        to={`/products/${params.type}/${params.singleProduct}/review`}
        className='btn'
      >
        Review's
      </Link>
      <Link to='/cart' className='btn'>
        Add to cart
      </Link>
      <Link to='/products' className='btn'>
        Back to menu
      </Link>
      <div>
        {filterObject.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.name}</h1>
              <div className='img-container'></div>
              <img src={item.image} alt='' className='img' />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SingleProducts
