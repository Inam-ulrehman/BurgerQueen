import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import CartHolder from '../components/CartHolder'
import { getCartItems } from '../features/cart/cartSlice'

const SingleProducts = () => {
  const { products } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  const params = useParams()
  const filterObject = products.filter((item) => {
    const filterResult = item._id === params.singleProduct
    return filterResult
  })
  const handleAddToCart = (e) => {
    dispatch(getCartItems(filterObject))
  }
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])
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
        Your Cart
      </Link>
      <Link to='/products' className='btn'>
        menu
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
      <button onClick={handleAddToCart} className='btn' type='button'>
        Add to Cart
      </button>
      {/* ==================Cart Holder============ */}
      <CartHolder />
    </div>
  )
}

export default SingleProducts
