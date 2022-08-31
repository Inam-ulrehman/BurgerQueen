import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { calculateTotal, removeCart } from '../../features/cart/cartSlice'
import EmptyCart from './EmptyCart'
import { formatPrice } from '../../utils/helper'
import SingleCartItem from './SingleCartItem'
const CartHolder = () => {
  const dispatch = useDispatch()
  const { cart, total } = useSelector((state) => {
    return state.cart
  })
  useEffect(() => {
    dispatch(calculateTotal())
    // eslint-disable-next-line
  }, [cart])
  if (cart.length === 0) return <EmptyCart />
  return (
    <Wrapper>
      {cart.map((item, index) => {
        return <SingleCartItem key={index} {...item} />
      })}
      <div className='empty-cart-button'>
        <button
          type='button'
          className='btn '
          onClick={() => dispatch(removeCart())}
        >
          empty cart
        </button>
      </div>
      <hr />
      <div className='total'>
        <h2>Amount </h2>
        <h3>Total: {formatPrice(total)}</h3>
      </div>
      <hr />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .empty-cart-button {
    text-align: center;
  }
  .total {
    display: flex;
    justify-content: space-around;
  }
`
export default CartHolder
