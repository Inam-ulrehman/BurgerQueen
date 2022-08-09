import React from 'react'
import { formatPrice } from '../utils/helper'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { removeCart } from '../features/cart/cartSlice'
const TotalCartComponent = ({ newTotal, totalItems }) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart)
  return (
    <Wrapper className='cart-holder'>
      <h5 className='cart-holder-total'>TOTAL</h5>
      <div>
        <h5>Sub-total </h5>
        <h5>{formatPrice(newTotal)}</h5>
      </div>
      <p className='cart-holder-delivery'>Standard Delivery {`($2.86)`}</p>
      <Link to='/user' className='btn btn-block' type='button'>
        CHECKOUT
      </Link>
      <p className='title total-item-title'>Total Items : $ {cart.length}</p>
      <Link className='btn more-products' to='/products'>
        More products
      </Link>
      <button
        type='button'
        onClick={() => {
          dispatch(removeCart())
        }}
        className='btn cart-btn'
      >
        Empty your Cart
      </button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .total-item-title {
    margin: 0px;
  }
  .more-products {
    margin-top: 4rem;
  }
  .cart-btn {
    margin-top: 1rem;
  }
`

export default TotalCartComponent
